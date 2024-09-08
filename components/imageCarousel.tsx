"use client"

import React, { useEffect, useCallback, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from 'react-intersection-observer';
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/13631bd8561dfb70d6322020229cb37e-1725821674179/Screenshot%202024-09-09%20at%2012.19.02%E2%80%AFAM.png?__cld_token__=exp=1725843299~hmac=30716398699ac82146dbb8959c6d4fbd67909fc15366031dbb58a52baef6b1b4", alt: "Book 1" },
  { src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/13631bd8561dfb70d6322020229cb37e-1725821674161/Screenshot%202024-09-09%20at%2012.19.36%E2%80%AFAM.png?__cld_token__=exp=1725843299~hmac=34cbf4303c05ea747a38d573bab7f3ec34031962140ec9c5516bf4c8e1c6ae84", alt: "Book 2" },
];

const ImageCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div ref={ref} className='overflow-hidden max-w-screen-sm md:max-w-7xl'>
      <Carousel
        plugins={inView ? [plugin.current] : []}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;