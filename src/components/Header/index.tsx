"use client";

import useScreenSize from "@/src/hooks/useScreenSize";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
    const { screenSize, breakpoints } = useScreenSize();

    if (screenSize.width > breakpoints.md) {
        return <HeaderDesktop />;
    }

    return <HeaderMobile />;
}
