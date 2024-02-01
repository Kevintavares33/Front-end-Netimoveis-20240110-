import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> & {
    selected?: boolean;
    variant?: "primary" | "gray" | "purple" | "disabled";
    variantStyle?: "outlined" | "rounded";
    size?: "sm" | "md";
};

const button = tv({
    base: "text-sm py-2 rounded-[10px]",
    variants: {
        color: {
            primary: "bg-orange-600 text-white hover:bg-orange-700",
            gray: "text-zinc-600 border border-neutral-200 rounded-full font-semibold px-3 py-2",
            purple: "border-purple-800 text-purple-800",
            disabled: "text-zinc-200 border border-zinc-200",
        },
        size: {
            sm: "text-sm",
            md: "text-base",
        },
        selected: {
            true: "border-purple-800 bg-neutral-100 text-purple-800",
        },
        variantStyle: {
            outlined: "rounded-full border",
            rounded: "rounded-full",
        },
    },
    defaultVariants: {
        color: "primary",
        size: "md",
    },
});

export default function Button({
    selected = false,
    variant = "primary",
    size = "md",
    variantStyle,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            data-selected={selected}
            className={twMerge(
                button({
                    variantStyle: variantStyle,
                    color: variant,
                    size: size,
                    selected: selected,
                }),
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
