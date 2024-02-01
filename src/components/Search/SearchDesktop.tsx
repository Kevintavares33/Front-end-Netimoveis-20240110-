"use client";

import { SearchIcon } from "lucide-react";
import Button from "../ui/Button";
import SelectLocationInput from "./SelectLocationInput";
import SelectRoomQuantityInput from "./SelectRoomQuantityInput";
import { SearchContext } from ".";
import { useContext } from "react";
import { applyFilters } from "./actions";

export default function SearchDesktop() {
    const { location, stagedSearchParams } = useContext(SearchContext);

    return (
        <div className="flex justify-center items-center bg-white rounded-full w-[700px]">
            <SelectLocationInput />
            <span className="border-l h-[40px]" />
            <SelectRoomQuantityInput />
            <Button
                variant="primary"
                variantStyle="rounded"
                size="md"
                className="flex justify-center gap-2 p-4 font-bold mx-[10px]"
                onClick={async () => applyFilters(stagedSearchParams)}
            >
                <SearchIcon size={24} />
                {location ? "Buscar" : null}
            </Button>
        </div>
    );
}
