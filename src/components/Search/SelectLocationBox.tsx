"use client";

import { MapPinIcon } from "lucide-react";
import { Dispatch, SetStateAction, useContext } from "react";
import { SearchContext } from ".";
import { PlaceType } from "@/src/types";
import { Places } from "@/src/data/places";
import placesJSON from "@/assets/place.json" assert { type: "json" };

type SelectLocationBoxProps = {
    setIsFocused: Dispatch<SetStateAction<boolean>>;
};

export default function SelectLocationBox({
    setIsFocused,
}: SelectLocationBoxProps) {
    const { location, setLocation, stageSearchParams } =
        useContext(SearchContext);
    const places = new Places(placesJSON).searchMany(location);

    const handleSelectLocation = (location: PlaceType) => {
        stageSearchParams({ key: "location", value: location.name });
        setLocation(`${location.name}, ${location.state.shortname}`);
        setIsFocused(false);
    };

    return (
        <div className="max-w-[320px] border border-neutral-200 rounded-2xl bg-white absolute top-[110%] z-10">
            <ul>
                <div className="py-3 mx-6">
                    <span className="text-sm text-zinc-400">
                        Busque por cidade, região, bairro ou código
                    </span>
                </div>
                {places.map((place) => (
                    <li
                        className="flex py-[10px] border-none hover:bg-neutral-100 last:rounded-b-2xl :bg-black"
                        onClick={() => handleSelectLocation(place)}
                        key={place.placeId}
                    >
                        <MapPinIcon size={16} className="text-zinc-400 mx-3" />
                        <div className="flex flex-col">
                            <span className="text-sm">{`${place.name}, ${place.state.name}`}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
