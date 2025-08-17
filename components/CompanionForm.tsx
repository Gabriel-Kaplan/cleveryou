// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion, newCompanionPermissions, getRemainingCompanionsThisMonth} from "@/lib/actions/companion.actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: 'Coach name is required.'}),
    subject: z.string().min(1, { message: 'Subject is required.'}),
    topic: z.string().min(1, { message: 'Learning topic is required.'}),
    voice: z.string().min(1, { message: 'Voice preference is required.'}),
    style: z.string().min(1, { message: 'Teaching style is required.'}),
    duration: z.coerce.number().min(1, { message: 'Session duration is required.'}),
})

const CompanionForm = () => {
    const [remaining, setRemaining] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    useEffect(() => {
        const checkPermissions = async () => {
            try {
                const remainingCount = await getRemainingCompanionsThisMonth();
                setRemaining(remainingCount);
            } catch (error) {
                console.error('Error checking permissions:', error);
            }
        };

        checkPermissions();
    }, []);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        
        try {
            const hasPermission = await newCompanionPermissions();
            
            if (!hasPermission) {
                alert('You have reached your monthly limit for creating CleverCoaches. Please try again next month.');
                setIsLoading(false);
                return;
            }

            const companion = await createCompanion(values);

            if(companion) {
                router.push(`/coaches/${companion.id}`);
            } else {
                console.log('Failed to create a companion');
                router.push('/');
            }
        } catch (error) {
            console.error('Error creating companion:', error);
            alert('Failed to create companion. Please try again.');
            setIsLoading(false);
        }
    }

    return (
        <TooltipProvider>
            <div>
                {remaining >= 0 && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-700">
                            You can create <strong>{remaining}</strong> more CleverCoach{remaining !== 1 ? 'es' : ''} this month.
                        </p>
                    </div>
                )}
                
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Give Your Coach a Name
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">Choose a memorable name for your AI tutor. This will help you identify it later when you have multiple coaches.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g., Math Mentor Mike, Grammar Guide Sarah"
                                            {...field}
                                            className="input"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Subject Area
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">Select the main academic subject your coach will specialize in.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="input capitalize">
                                                <SelectValue placeholder="Choose the subject your coach will teach" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {subjects.map((subject) => (
                                                    <SelectItem
                                                        value={subject}
                                                        key={subject}
                                                        className="capitalize"
                                                    >
                                                        {subject}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Specific Learning Goal
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">Describe the specific concept, skill, or topic you want to learn. Be as detailed as possible for better coaching.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="e.g., The difference between phrases and clauses in English grammar, or How to solve quadratic equations step by step"
                                            {...field}
                                            className="input min-h-[80px]"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        The more specific you are, the better your coach can help you learn.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="voice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Coach Voice
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">Choose the voice type for your coach. This affects how your coach will sound during voice interactions.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="input">
                                                <SelectValue placeholder="Select your preferred voice type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">
                                                    Male Voice
                                                </SelectItem>
                                                <SelectItem value="female">
                                                    Female Voice
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="style"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Teaching Style
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">
                                                    <strong>Formal:</strong> Professional, structured lessons with academic language.<br/>
                                                    <strong>Casual:</strong> Friendly, conversational approach with simple explanations.
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="input">
                                                <SelectValue placeholder="How should your coach teach?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="formal">
                                                    Formal - Structured and professional
                                                </SelectItem>
                                                <SelectItem value="casual">
                                                    Casual - Friendly and conversational
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        Session Length
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">How long do you want each learning session to be? This helps your coach pace the lessons appropriately.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="15"
                                            {...field}
                                            className="input"
                                            min="5"
                                            max="120"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Recommended: 15-30 minutes for focused learning sessions
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button 
                            type="submit" 
                            className="w-full cursor-pointer" 
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Your Coach...' : 'Create My CleverCoach'}
                        </Button>
                    </form>
                </Form>
            </div>
        </TooltipProvider>
    )
}

export default CompanionForm