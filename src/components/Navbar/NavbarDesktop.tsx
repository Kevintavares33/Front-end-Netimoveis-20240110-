import netimoveisLogo from "@/public/netimoveis-logo.png";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function NavbarDesktop() {
    return (
        <nav className="h-[56px] bg-white flex items-center justify-between sticky top-0 z-20 lg:px-[7vw] xl:px-[10vw] 2xl:px-[17.5vw]">
            <div className="flex items-center gap-12">
                <Image src={netimoveisLogo} alt="Netimóveis logo" />
                <div className="flex gap-10 text-zinc-600">
                    <Link href="#">Imobiliárias</Link>
                    <Link href="#">Quero me Associar</Link>
                    <Link href="#" className="flex items-center gap-1">
                        Sobre <ChevronDownIcon size={12} />
                    </Link>
                    <Link href="#">Blog</Link>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <Button
                    variant="purple"
                    variantStyle="outlined"
                    className="px-4 py-1"
                >
                    Anunciar Imóvel
                </Button>
                <Link href="#" className="text-zinc-600">
                    Entrar
                </Link>
            </div>
        </nav>
    );
}
