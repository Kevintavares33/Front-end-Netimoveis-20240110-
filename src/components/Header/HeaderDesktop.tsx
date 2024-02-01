import initialBanner from "@/public/initial-banner-desktop.png";
import Image from "next/image";
import Search from "../Search";

export default function HeaderDesktop() {
    return (
        <header>
            <div className="flex items-center justify-center relative">
                <Image
                    src={initialBanner}
                    alt="Banner com mulher tomando café e sorrindo."
                />
                <div className="flex flex-col items-center gap-7 z-10 py-20 lg:py-32 absolute top-0">
                    <h1 className="font-bold text-white text-[2.125rem]">
                        Vende. Aluga. Conecta.
                    </h1>
                    <Search />
                </div>
            </div>
        </header>
    );
}
