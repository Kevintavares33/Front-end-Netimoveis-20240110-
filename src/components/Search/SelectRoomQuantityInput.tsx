"use client";

import { useContext, useState } from "react";
import { RoomQuantityType } from "@/src/types";
import useSearchParams from "@/src/hooks/useSearchParams";
import { BedIcon, ChevronDownIcon } from "lucide-react";
import SelectRoomQuantityBox from "./SelectRoomQuantityBox";
import { SearchContext } from ".";

const roomQuantity: RoomQuantityType[] = [
    { id: 1, label: "Todos", value: 0 },
    { id: 2, label: "1+", value: 1 },
    { id: 3, label: "2+", value: 2 },
    { id: 4, label: "3+", value: 3 },
    { id: 5, label: "4+", value: 4 },
];

export default function SelectRoomQuantityInput() {
    const [isSelectingRoom, setIsSelectingRoom] = useState(false);
    const { stagedSearchParams } = useContext(SearchContext);

    const selectedRoomQuantityLabel = () => {
        const selectedRoomQuantityParams = stagedSearchParams.find(
            (param) => param.key === "room-quantity"
        )?.value;
        if (!selectedRoomQuantityParams) return "Quantos Quartos?";

        const roomQuantityLabel = roomQuantity.find(
            (option) => option.value === Number(selectedRoomQuantityParams)
        ).label;

        return `${roomQuantityLabel} Quartos`;
    };

    const handleSelectingRoom = () => {
        setIsSelectingRoom(!isSelectingRoom);
    };

    return (
        <div className="relative w-full">
            <button
                className="flex flex-col gap-1 w-full px-6 py-4 border bg-white border-neutral-200 rounded-[10px] hover:bg-zinc-100 focus:shadow-sm md:rounded-full md:py-3 md:px-8 md:border-none"
                onClick={handleSelectingRoom}
            >
                <div className="flex justify-between w-full">
                    <span className="flex items-center gap-2 font-bold text-sm text-zinc-700">
                        <BedIcon size={20} className="text-zinc-400" />
                        Nº de Quartos
                    </span>
                    <ChevronDownIcon size={16} />
                </div>
                <span className="text-zinc-400">
                    {selectedRoomQuantityLabel()}
                </span>
            </button>

            {isSelectingRoom ? (
                <SelectRoomQuantityBox roomQuantityOptions={roomQuantity} />
            ) : null}
        </div>
    );
}
