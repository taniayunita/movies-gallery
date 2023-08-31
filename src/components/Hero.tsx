"use client";

import Image from "next/image";
import ImagePoster from '@/assets/image/poster.png'

import { Button } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("top-rated");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <Image src={ImagePoster} alt="poster" className="hero__cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="hero__overlay">
        <h1 className="hero__title">
          Find your favorite film and watch for FREE!
        </h1>
        <p className="hero__subtitle">
          Indulge your passion for film as you journey through a world of captivating stories, unforgettable characters, and boundless entertainment
        </p>
        <Button
          title="Explore Movies"
          containerStyles="bg-primary-purple w-[300px] text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

    </div>
  );
};

export default Hero;