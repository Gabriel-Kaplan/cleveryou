/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion, newCompanionPermissions, getRemainingCompanionsThisMonth} from "@/lib/actions/companion.actions";
import { useRouter } from "next/navigation"; // Use useRouter instead of redirect
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.'}),
    subject: z.string().min(1, { message: 'Subject is required.'}),
    topic: z.string().min(1, { message: 'Topic is required.'}),
    voice: z.string().min(1, { message: 'Voice is required.'}),
    style: z.string().min(1, { message: 'Style is required.'}),
    duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})

const CompanionForm = () => {
    const [remaining, setRemaining] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // Add router hook

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
            // Double-check permissions before creating
            const hasPermission = await newCompanionPermissions();
            
            if (!hasPermission) {
                alert('You have reached your monthly limit for creating CleverCoaches. Please try again next month.');
                setIsLoading(false);
                return;
            }

            const companion = await createCompanion(values);

            if(companion) {
                // Use router.push instead of redirect for client-side navigation
                router.push(`/coaches/${companion.id}`);
            } else {
                console.log('Failed to create a companion');
                router.push('/');
            }
        } catch (error) {
            console.error('Error creating companion:', error);
            alert('Failed to create companion. Please try again.');
            setIsLoading(false); // Make sure to reset loading state on error
        }
        // Note: Don't put setIsLoading(false) in finally block since successful creation will navigate away
    }

    return (
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
                                <FormLabel>CleverCoach name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter the CleverCoach name"
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
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input capitalize">
                                            <SelectValue placeholder="Select the subject" />
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
                                <FormLabel>What should the CleverCoach help with?</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Example: The differnce between phrases & clauses"
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
                        name="voice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Voice</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input">
                                            <SelectValue
                                                placeholder="Select the voice"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">
                                                Male
                                            </SelectItem>
                                            <SelectItem value="female">
                                                Female
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
                                <FormLabel>Style</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input">
                                            <SelectValue
                                                placeholder="Select the style"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="formal">
                                                Formal
                                            </SelectItem>
                                            <SelectItem value="casual">
                                                Casual
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
                                <FormLabel>Estimated session duration in minutes</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="15"
                                        {...field}
                                        className="input"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        type="submit" 
                        className="w-full cursor-pointer" 
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating...' : 'Build Your CleverCoach'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default CompanionForm