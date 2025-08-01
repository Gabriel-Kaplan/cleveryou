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
            <SelectTrigger className="w-48 h-9 text-sm hover:border-gray-400 focus:border-purple-500 rounded-md border-gray-300 bg-white text-gray-900">
                <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent className="min-w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-md border border-gray-200">
                <SelectItem 
                    value="all" 
                    className="text-sm text-gray-800 hover:bg-purple-100 data-[highlighted]:bg-purple-100 data-[highlighted]:text-purple-800 hover:text-purple-800 px-3 py-2 cursor-pointer transition-colors duration-150"
                >
                    All subjects
                </SelectItem>
                {subjects.map((subject) => (
                    <SelectItem 
                        key={subject} 
                        value={subject} 
                        className="capitalize text-sm text-gray-800 hover:bg-purple-100 data-[highlighted]:bg-purple-100 data-[highlighted]:text-purple-800 hover:text-purple-800 px-3 py-2 cursor-pointer transition-colors duration-150"
                    >
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;