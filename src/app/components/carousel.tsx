"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/pokemon.jpg",
    title: "POKEMON",
    href: "/pokemon"
  },
  // {
  //   image: "/one-piece.jpg",
  //   title: "ONE PIECE",
  //   href: "/one-piece"
  // },
  {
    image: "/nba (2).png",
    title: "NBA",
    href: "/nba"
  }, 
  {
    image: "/kpop.png",
    title: "K-POP",
    href: "/kpop"
  }];

export default function CarouselHome() {
  return (
    <div className="w-full mb-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
        Autoplay({
          delay: 10000,
        })
      ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover shadow"
                  priority={index === 0}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Centered text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="title caption text-5xl font-bold mb-3 drop-shadow-lg">
                    {slide.title}
                  </p>
                  <a href={slide.href} className="font-serif button-shadow flex items-center gap-2 bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                    <ShoppingBag className="h-5 w-5" /> Shop Now
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 z-10" />
        <CarouselNext className="right-4 md:right-8 z-10" />
      </Carousel>
    </div>
  );
}