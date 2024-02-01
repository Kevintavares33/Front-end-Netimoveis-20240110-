"use client";

import { MapPinIcon } from "lucide-react";
import SelectLocationBox from "./SelectLocationBox";
import { useContext, useState } from "react";
import { SearchContext } from ".";
import { twMerge } from "tailwind-merge";

export default function SelectLocationInput() {
    const [isFocused, setIsFocused] = useState(false);
    const { location, setLocation } = useContext(SearchContext);

    return (
        <div className="relative w-full">
            <label
                className={twMerge(
                    "flex flex-col gap-1 w-full px-6 py-4 border bg-white border-neutral-200 rounded-[10px] hover:bg-zinc-100 md:rounded-full md:py-3 md:px-8 md:border-none",
                    isFocused ? "shadow-sm" : ""
                )}
            >
                <span className="flex items-center gap-2 font-bold text-sm text-zinc-700">
                    <MapPinIcon size={20} className="text-zinc-400" />
                    Localização
                </span>
                <input
                    type="text"
                    placeholder="Qual é a Localização?"
                    className="placeholder:text-zinc-400 bg-transparent outline-none text-ellipsis"
                    title={location}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                />
            </label>
            {isFocused ? (
                <SelectLocationBox setIsFocused={setIsFocused} />
            ) : null}
        </div>
    );
}
