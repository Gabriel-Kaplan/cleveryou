import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');
    const canCreateCompanion = await newCompanionPermissions();
    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 pt-35 items-center justify-center ">
          {/* Background decoration */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
                </div>

                {canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/20 rounded-3xl p-8">
                    <h1>CleverCoach Lab</h1>
                    <CompanionForm />
                </article>
                ):(
                     <article className="companion-limit">
                        <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
                        <div className="cta-badge">
                            Upgrade your plan
                        </div>
                        <h1>You’ve Reached Your Limit</h1>
                        <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                        <Link href="/subscription" className="btn-primary w-full justify-center" >
                            Upgrade My Plan
                        </Link>
                    </article>
               )}
        </main>
    )
}

export default NewCompanion