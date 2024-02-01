"use client";

import { Carousel as ReactResponsiveCarousel, CarouselProps as ReactResponsiveCarouselProps, } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// SeuComponente.jsx ou SeuComponente.tsx


import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Restante do seu componente


type CarouselProps = Partial<ReactResponsiveCarouselProps> & {
    children: React.ReactChild[];
};

export default function Carousel({ children, ...props }: CarouselProps) {
    return (
        <ReactResponsiveCarousel {...props}>{children}</ReactResponsiveCarousel>
    );
}
