"use client";

import { Carousel as ReactResponsiveCarousel, CarouselProps as ReactResponsiveCarouselProps, } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



import 'react-responsive-carousel/lib/styles/carousel.min.css';




type CarouselProps = Partial<ReactResponsiveCarouselProps> & {
    children: React.ReactChild[];
};

export default function Carousel({ children, ...props }: CarouselProps) {
    return (
        <ReactResponsiveCarousel {...props}>{children}</ReactResponsiveCarousel>
    );
}
