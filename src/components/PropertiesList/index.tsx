"use client";

import flatsJSON from "@/assets/flats.json" assert { type: "json" };
import { Flats } from "@/src/data/flats";
import useScreenSize, { BreakpointsType } from "@/src/hooks/useScreenSize";
import useSearchParams from "@/src/hooks/useSearchParams";
import {
    ChevronDownIcon,
    ChevronLeft,
    ChevronRight,
    ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PropertyCard from "../PropertyCard";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel";
import IndicatorDot from "../ui/Carousel/IndicatorDot";

const handleCarouselDefaultValues = (
    screenWidth: number,
    breakpoints: BreakpointsType
) => {
    if (screenWidth > breakpoints["2xl"])
        return { displayCount: 4, defaultIndex: 1.5 };
    if (screenWidth > breakpoints["md"])
        return { displayCount: 3, defaultIndex: 1 };
    if (screenWidth > breakpoints["sm"])
        return { displayCount: 2, defaultIndex: 0.5 };

    return { displayCount: 1.1, defaultIndex: 0 };
};

export default function PropertiesList() {
    const { getSearchParam } = useSearchParams();
    const flats = new Flats(flatsJSON).searchMany({
        location: getSearchParam("location"),
        roomQuantity: Number(getSearchParam("room-quantity")),
    });

    const { screenSize, breakpoints } = useScreenSize();

    const displayCount = handleCarouselDefaultValues(
        screenSize.width,
        breakpoints
    ).displayCount;
    const defaultIndex = handleCarouselDefaultValues(
        screenSize.width,
        breakpoints
    ).defaultIndex;

    const [carouselCurrentIndex, setCarouselCurrentIndex] =
        useState(defaultIndex);
    const slideIndicatorsNumber = Math.ceil(flats.length / displayCount);

    const handlePrevButtonClick = () => {
        setCarouselCurrentIndex(carouselCurrentIndex - displayCount);
    };
    const handleNextButtonClick = () => {
        setCarouselCurrentIndex(carouselCurrentIndex + displayCount);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <div className="space-y-3">
                    <h2 className="flex items-center gap-1 text-xl lg:text-2xl font-bold">
                        Novos Anúncios em
                        <span className="flex items-center gap-1 text-orange-600">
                            Belo Horizonte <ChevronDownIcon size={16} />
                        </span>
                    </h2>
                    <Link
                        href="#"
                        className="flex items-center w-fit gap-1 text-blue-600"
                    >
                        Ver todos os imóveis <ExternalLinkIcon size={16} />
                    </Link>
                </div>
                <div className="h-fit hidden md:visible md:flex md:gap-3">
                    <Button
                        variant={
                            carouselCurrentIndex <= defaultIndex
                                ? "disabled"
                                : "gray"
                        }
                        variantStyle="rounded"
                        className="p-2.5"
                        onClick={handlePrevButtonClick}
                        disabled={carouselCurrentIndex <= defaultIndex}
                    >
                        <ChevronLeft size={16} />
                    </Button>
                    <Button
                        variant={
                            carouselCurrentIndex > flats.length - displayCount
                                ? "disabled"
                                : "gray"
                        }
                        variantStyle="rounded"
                        className="p-2.5"
                        onClick={handleNextButtonClick}
                        disabled={
                            carouselCurrentIndex > flats.length - displayCount
                        }
                    >
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>
            <div>
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    centerMode
                    centerSlidePercentage={100 / displayCount}
                    selectedItem={carouselCurrentIndex}
                    className="h-[400px] md:overflow-x-visible"
                >
                    {flats.map((place) => (
                        <PropertyCard
                            place={place}
                            key={`${place.Title}-${place.Author}`}
                        />
                    ))}
                </Carousel>
                <IndicatorDot
                    numberOfIndicators={slideIndicatorsNumber}
                    firstIndicatorIndex={defaultIndex}
                    numberOfElementsDisplayedOnCarousel={displayCount}
                    currentIndicatorIndex={carouselCurrentIndex}
                />
            </div>
        </div>
    );
}
