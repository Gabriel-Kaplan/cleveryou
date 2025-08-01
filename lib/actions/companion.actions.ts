'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();

    if(subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if(error) throw new Error(error.message);

    return companions;
}

export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('id', id);

    if(error) return console.log(error);

    return data[0];
}

export const addToSessionHistory = async (companionId: string) => {
    const { userId } = await auth();
    if (!userId) throw new Error('User not authenticated');
    
    const supabase = createSupabaseClient();
    
    // Check if a session already exists for this user and companion
    const { data: existingSession, error: checkError } = await supabase
        .from('session_history')
        .select('id, created_at')
        .eq('companion_id', companionId)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(); // Use maybeSingle() to avoid errors when no record exists
    
    if (checkError && checkError.code !== 'PGRST116') {
        // PGRST116 is "no rows returned" which is expected if no session exists
        throw new Error(checkError.message);
    }
    
    // If session exists and was created recently (within 5 minutes), don't create new one
    if (existingSession) {
        const sessionTime = new Date(existingSession.created_at);
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        
        if (sessionTime > fiveMinutesAgo) {
            return existingSession;
        }
    }
    
    // Create new session only if none exists or last one is old
    const { data, error } = await supabase
        .from('session_history')
        .insert({
            companion_id: companionId,
            user_id: userId,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);

    return data;
}

export const getRecentSessions = async (limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserSessions = async (userId: string, limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserCompanions = async (userId: string) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('author', userId)

    if(error) throw new Error(error.message);

    return data;
}

export const newCompanionPermissions = async () => {
    const { userId, has } = await auth();
    const supabase = createSupabaseClient();

    let limit = 0;

    if(has({ plan: 'genius' })) {
        return true;
    } else if(has({ feature: "3_active_clever_coaches" })) {
        limit = 3;
    } else if(has({ feature:"15_active_clever_coaches" })) {
        limit = 15;
    }

    const { data, error } = await supabase
        .from('companions')
        .select('id', { count: 'exact' })
        .eq('author', userId)

    if(error) throw new Error(error.message);

    const companionCount = data?.length;

    if(companionCount >= limit) {
        return false
    } else {
        return true;
    }
}

// Bookmarks
export const addBookmark = async (companionId: string, path: string) => {
  const { userId } = await auth();
  if (!userId) return;
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("bookmarks").insert({
    companion_id: companionId,
    user_id: userId,
  });
  if (error) {
    throw new Error(error.message);
  }
  // Revalidate the path to force a re-render of the page

  revalidatePath(path);
  return data;
};

export const removeBookmark = async (companionId: string, path: string) => {
  const { userId } = await auth();
  if (!userId) return;
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("bookmarks")
    .delete()
    .eq("companion_id", companionId)
    .eq("user_id", userId);
  if (error) {
    throw new Error(error.message);
  }
  revalidatePath(path);
  return data;
};

export const getBookmarkedCompanions = async (userId: string) => {
  const supabase = createSupabaseClient();
  
  // First, get all bookmark companion IDs for the user
  const { data: bookmarks, error: bookmarkError } = await supabase
    .from("bookmarks")
    .select("companion_id")
    .eq("user_id", userId);
    
  if (bookmarkError) {
    throw new Error(bookmarkError.message);
  }
  
  // If no bookmarks, return empty array
  if (!bookmarks || bookmarks.length === 0) {
    return [];
  }
  
  // Extract companion IDs
  const companionIds = bookmarks.map(bookmark => bookmark.companion_id);
  
  // Get companion details for those IDs
  const { data: companions, error: companionError } = await supabase
    .from("companions")
    .select("*")
    .in("id", companionIds);
    
  if (companionError) {
    throw new Error(companionError.message);
  }
  
  return companions || [];
};


export const getUserBookmarkIds = async (userId: string): Promise<string[]> => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("bookmarks")
    .select("companion_id")
    .eq("user_id", userId);
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data.map(bookmark => bookmark.companion_id);
};

// Check if a specific companion is bookmarked by user
export const isCompanionBookmarked = async (companionId: string, userId: string): Promise<boolean> => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("bookmarks")
    .select("id")
    .eq("companion_id", companionId)
    .eq("user_id", userId)
    .maybeSingle();
  
  if (error && error.code !== 'PGRST116') {
    throw new Error(error.message);
  }
  
  return !!data;
};
