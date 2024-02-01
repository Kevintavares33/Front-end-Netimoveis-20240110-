type SelectorDotProps = {
    numberOfIndicators: number;
    firstIndicatorIndex: number;
    numberOfElementsDisplayedOnCarousel: number;
    currentIndicatorIndex: number;
};

export default function IndicatorDot({
    numberOfIndicators,
    firstIndicatorIndex,
    numberOfElementsDisplayedOnCarousel,
    currentIndicatorIndex,
}: SelectorDotProps) {
    const indicatorsIndexArray = Array.from(
        { length: numberOfIndicators },
        (_, index) =>
            firstIndicatorIndex + index * numberOfElementsDisplayedOnCarousel
    );

    return (
        <ul className="flex gap-2 justify-center items-center">
            {indicatorsIndexArray.map((dotId) => (
                <li
                    data-selected={dotId === currentIndicatorIndex}
                    className="text-zinc-300 text-2xl cursor-default data-[selected=true]:text-zinc-700 data-[selected=true]:text-3xl"
                    key={dotId}
                >
                    •
                </li>
            ))}
        </ul>
    );
}
