"use client";

import { SearchIcon } from "lucide-react";
import SelectLocationInput from "./SelectLocationInput";
import SelectRoomQuantityInput from "./SelectRoomQuantityInput";
import Button from "../ui/Button";
import { applyFilters } from "./actions";
import { useContext } from "react";
import { SearchContext } from ".";

export default function SearchMobile() {
    const { stagedSearchParams } = useContext(SearchContext);
    return (
        <div className="flex flex-col gap-4">
            <SelectLocationInput />
            <SelectRoomQuantityInput />

            <Button
                variant="primary"
                size="md"
                className="flex justify-center gap-2 w-full mt-2"
                onClick={async () => applyFilters(stagedSearchParams)}
            >
                <SearchIcon size={24} />
                Buscar Imóveis
            </Button>
        </div>
    );
}
