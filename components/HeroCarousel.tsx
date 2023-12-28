"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function HeroCarousel() {
  const heroImages = [
    { imgurl: "/assets/images/hero-1.svg", alt: "smartwatch" },
    { imgurl: "/assets/images/hero-2.svg", alt: "bag" },
    { imgurl: "/assets/images/hero-3.svg", alt: "lamp" },
    { imgurl: "/assets/images/hero-4.svg", alt: "air fryer" },
    { imgurl: "/assets/images/hero-5.svg", alt: "chair" },
  ];

  return (
    <>
      <div className="hero-carousel">
        <Carousel
          showThumbs={false}
          //autoPlay
          infiniteLoop
          //interval={1500}
          showArrows={false}
          showStatus={false}
        >
          {heroImages.map((item, index) => (
            <Image
              src={item.imgurl}
              alt={item.alt}
              width={484}
              height={484}
              className="object-contain"
              key={index}
            />
          ))}
        </Carousel>
        <Image
          src="assets/icons/hand-drawn-arrow.svg"
          alt="arrow"
          width={175}
          height={175}
          className="max-xl:hidden absolute -left-[15%] bottom-10 z-0"
        />
      </div>
    </>
  );
}
