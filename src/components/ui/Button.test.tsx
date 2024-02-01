import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(() => {
    cleanup();
});

describe("<Button />", () => {
    it("Should render with the provided children", () => {
        render(<Button>Test children</Button>);

        expect(screen.getByText("Test children")).toBeDefined();
    });

    it("Should render with the 'primary' variant", () => {
        render(<Button variant="primary">Test children</Button>);

        const button = screen.getByRole("button");

        expect(button.classList).toContain("bg-orange-600");
        expect(button.classList).toContain("text-white");
        expect(button.classList).toContain("hover:bg-orange-700");
    });
});
