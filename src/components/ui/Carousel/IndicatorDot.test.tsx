import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import IndicatorDot from "./IndicatorDot";

afterEach(() => {
    cleanup();
});

describe("<IndicatorDot />", () => {
    it("Should render X number of indicators", () => {
        render(
            <IndicatorDot
                numberOfIndicators={4}
                currentIndicatorIndex={1}
                firstIndicatorIndex={1}
                numberOfElementsDisplayedOnCarousel={4}
            />
        );

        const indicators = screen.getAllByRole("listitem");

        expect(indicators).toHaveLength(4);
    });

    it("Should have the first indicator selected", () => {
        render(
            <IndicatorDot
                numberOfIndicators={4}
                currentIndicatorIndex={1}
                firstIndicatorIndex={1}
                numberOfElementsDisplayedOnCarousel={4}
            />
        );

        const indicators = screen.getAllByRole("listitem");

        expect(indicators[0].getAttribute("data-selected")).toBe("true");
    });
});
