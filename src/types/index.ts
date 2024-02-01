import { Dispatch, SetStateAction } from "react";

export type FlatType = {
    City: string;
    Title: string;
    Author: string;
    Rooms: number;
    Tags: string[];
    Price: number;
    Image: string;
};

export type PlaceType = {
    name: string;
    state: {
        name: string;
        shortname: string;
    };
    placeId: number;
};

export type StagedSearchParams = {
    key: string;
    value: string;
};

export type SearchContextType = {
    stagedSearchParams: StagedSearchParams[];
    stageSearchParams: (newParam: StagedSearchParams) => void;
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
};

export type RoomQuantityType = {
    id: number;
    label: string;
    value: number;
};
