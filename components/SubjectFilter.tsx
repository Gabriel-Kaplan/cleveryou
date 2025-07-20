/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || "";
    const [subject, setSubject] = useState(query);

    useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false });
    }, [subject]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="w-48 h-9 text-sm hover:border-slate-800 focus:border-slate-500 rounded-md">
                <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent className="min-w-48 bg-white/5 shadow-md rounded-md">
                <SelectItem value="all" className="text-sm hover:bg-purple-500 hover:text-white px-3 py-2">
                    All subjects
                </SelectItem>
                {subjects.map((subject) => (
                    <SelectItem 
                        key={subject} 
                        value={subject} 
                        className="capitalize text-sm hover:bg-purple-500 hover:text-white px-3 py-2"
                    >
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;