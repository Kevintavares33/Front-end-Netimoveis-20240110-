"use client";

import Button from "../ui/Button";
import useSearchParams from "@/src/hooks/useSearchParams";
import { RoomQuantityType } from "@/src/types";
import { useContext } from "react";
import { SearchContext } from ".";

type SelectRoomProps = {
    roomQuantityOptions: RoomQuantityType[];
};

export default function SelectRoomQuantityBox({
    roomQuantityOptions,
}: SelectRoomProps) {
    const { stageSearchParams, stagedSearchParams } = useContext(SearchContext);
    const { getSearchParam } = useSearchParams();

    const isSelectedRoomQuantityOption = (
        roomQuantityOption: RoomQuantityType
    ) => {
        const roomQuantityParams = stagedSearchParams.find(
            (param) => param.key === "room-quantity"
        )?.value;

        // Opção "Todos" selecionada por padrão
        if (!roomQuantityParams && roomQuantityOption.value === 0) return true;

        return String(roomQuantityOption.value) === roomQuantityParams;
    };

    const handleSelectRoomQuantity = (roomQuantityOption: RoomQuantityType) => {
        stageSearchParams({
            key: "room-quantity",
            value: String(roomQuantityOption.value),
        });
    };

    return (
        <div className="flex flex-col gap-6 bg-white max-w-[320px] rounded-2xl border border-neutral-200 divide-y px-6 pt-4 pb-6 absolute top-[110%] z-10">
            <div className="space-y-3">
                <span className="text-sm text-zinc-700">Número de Quartos</span>
                <div className="space-x-2">
                    {roomQuantityOptions.map((roomQuantityOption) => (
                        <Button
                            variant="gray"
                            variantStyle="outlined"
                            size="sm"
                            selected={isSelectedRoomQuantityOption(
                                roomQuantityOption
                            )}
                            onClick={() =>
                                handleSelectRoomQuantity(roomQuantityOption)
                            }
                            key={roomQuantityOption.id}
                        >
                            {roomQuantityOption.label}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="pt-6">
                <label className="flex flex-col gap-1 text-sm text-zinc-700">
                    Tipo de Propriedade
                    <select className="border border-neutral-200 rounded-lg px-3 py-[10px]">
                        <option hidden>Todos os tipos</option>
                    </select>
                </label>
            </div>
        </div>
    );
}
