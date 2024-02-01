"use client";

import useScreenSize from "@/src/hooks/useScreenSize";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
    const { screenSize, breakpoints } = useScreenSize();

    if (screenSize.width > breakpoints.lg) {
        return <NavbarDesktop />;
    }

    return <NavbarMobile />;
}
