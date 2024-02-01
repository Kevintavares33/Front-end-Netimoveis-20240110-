import Image from "next/image";
import Tag from "../ui/Tag";
import Carousel from "../ui/Carousel";
import { FlatType } from "@/src/types";

type PropertyCardProps = {
    place: FlatType;
};

const TagMap = {
    elevator: "Elevador",
    furniture: "Móveis",
    parking: "Estacionamento",
} as const;

export default function PropertyCard({ place }: PropertyCardProps) {
    const carouselDisplayNumber = 5;

    return (
        <div className="flex flex-col flex-grow rounded-2xl border max-w-[295px]">
            <Carousel
                showArrows={false}
                showStatus={false}
                className="h-[200px]"
            >
                {Array(carouselDisplayNumber)
                    .fill(0)
                    .map(() => (
                        <Image
                            src={place.Image}
                            alt={place.Title}
                            width={295}
                            height={200}
                            className="rounded-t-2xl"
                            key={`${place.Author}-${place.Title}`}
                        />
                    ))}
            </Carousel>
            <div className="flex flex-col flex-grow justify-between p-4 space-y-3 text-start">
                <div className="space-y-1">
                    <h3 className="font-bold text-ellipsis" title={place.Title}>
                        {place.Title}
                    </h3>
                    <span className="text-sm text-zinc-400">{place.City}</span>
                </div>
                <div className="space-y-3">
                    <span className="text-sm text-zinc-800">{`${place.Rooms} Quartos`}</span>
                    <div className="flex gap-2">
                        {place.Tags.map((tag) => (
                            <Tag key={`${tag}-${place.Author}-${place.Title}`}>
                                {TagMap[tag]}
                            </Tag>
                        ))}
                    </div>
                    <div>
                        <span className="text-orange-600 font-bold text-xl">{`R$ ${place.Price.toLocaleString(
                            "pt-BR"
                        )}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
