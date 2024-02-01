import {
    useRouter,
    useSearchParams as useNextSearchParams,
} from "next/navigation";
import { useCallback } from "react";

function useSearchParams() {
    const router = useRouter();
    const searchParams = useNextSearchParams();

    const addSearchParam = useCallback(
        (searchParamKey: string, searchParamValue: string) => {
            const url = new URL(window.location.href);
            url.searchParams.set(searchParamKey, String(searchParamValue));
            router.push(url.toString(), { scroll: false });
        },
        []
    );

    const getSearchParam = useCallback(
        (searchParamKey: string) => {
            return searchParams.get(searchParamKey);
        },
        [searchParams]
    );

    return { addSearchParam, getSearchParam };
}

export default useSearchParams;
