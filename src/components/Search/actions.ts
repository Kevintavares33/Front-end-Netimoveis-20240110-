"use server";

import { redirect } from "next/navigation";
import { StagedSearchParams } from "@/src/types";

export const applyFilters = async (searchParams: StagedSearchParams[]) => {
    const url = new URLSearchParams();
    searchParams.forEach((param) => {
        url.set(param.key, param.value);
    });

    redirect(`/?${url}`);
};
