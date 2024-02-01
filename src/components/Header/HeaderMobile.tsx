import Image from "next/image";
import initialBanner from "@/public/initial-banner-mobile.png";
import Search from "../Search";

export default function HeaderMobile() {
    return (
        <header className="space-y-8">
            <div className="h-[173px] flex items-center">
                <Image
                    src={initialBanner}
                    alt="Banner com mulher tomando café e sorrindo."
                    className="absolute"
                />
                <div className="flex flex-col font-bold text-white text-2xl ml-16 z-10">
                    <h1>Vende.</h1>
                    <h1>Aluga.</h1>
                    <h1>Conecta.</h1>
                </div>
            </div>
            <div className="px-4 md:px-20 space-y-6">
                <ul className="flex gap-6 border-b border-neutral-200">
                    <li className="pb-1 border-orange-400 border-b-[5px]">
                        <button className="p-1">Alugar</button>
                    </li>
                    <li className="pb-1">
                        <button className="p-1 text-zinc-400">Comprar</button>
                    </li>
                </ul>

                <Search />
            </div>
        </header>
    );
}
