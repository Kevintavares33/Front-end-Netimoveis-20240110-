import useScreenSize from "@/src/hooks/useScreenSize";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";
import { createContext, useState } from "react";
import { SearchContextType, StagedSearchParams } from "@/src/types";

export const SearchContext = createContext<SearchContextType | null>(null);

export default function Search() {
    const [location, setLocation] = useState("");
    const [stagedSearchParams, setStagedSearchParams] = useState<
        StagedSearchParams[]
    >([]);
    const { screenSize, breakpoints } = useScreenSize();

    const stageSearchParams = (newParam: StagedSearchParams) => {
        const findSearchParamIndex = stagedSearchParams.findIndex(
            (param) => param.key === newParam.key
        );

        if (findSearchParamIndex >= 0) {
            const newStagedSearchParams = [...stagedSearchParams];
            newStagedSearchParams[findSearchParamIndex] = newParam;

            setStagedSearchParams(newStagedSearchParams);
        } else {
            setStagedSearchParams([...stagedSearchParams, newParam]);
        }
    };

    if (screenSize.width > breakpoints.md) {
        return (
            <SearchContext.Provider
                value={{
                    stagedSearchParams,
                    stageSearchParams,
                    location,
                    setLocation,
                }}
            >
                <SearchDesktop />
            </SearchContext.Provider>
        );
    }

    return (
        <SearchContext.Provider
            value={{
                stagedSearchParams,
                stageSearchParams,
                location,
                setLocation,
            }}
        >
            <SearchMobile />
        </SearchContext.Provider>
    );
}
