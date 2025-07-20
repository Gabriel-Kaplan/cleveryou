import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 pt-35 items-center justify-center ">
          {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
                <article className="w-full gap-4 flex flex-col bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/20 rounded-3xl p-8">
                    <h1>CleverCoach Lab</h1>
                    <CompanionForm />
                </article>
              
        </main>
    )
}

export default NewCompanion