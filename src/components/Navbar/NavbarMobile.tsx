import Image from "next/image";
import { Menu } from "lucide-react";
import netimoveisLogo from "@/public/netimoveis-logo.png";

export default function NavbarMobile() {
    return (
        <nav className="h-[56px] px-4 sticky top-0 z-20 md:px-20 bg-white flex items-center justify-between">
            <Image
                src={netimoveisLogo}
                alt="Netimóveis logo"
                className="w-[126px] h-[32px]"
            />
            <Menu className="text-zinc-600" size={24} />
        </nav>
    );
}
