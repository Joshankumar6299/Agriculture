import React from "react";
import food from "../assets/food.png";
import eco from "../assets/eco.png";
import farm from "../assets/farm.png";
import fress from "../assets/fress.png";
import tractor from "../assets/tractor.png";
import rice from "../assets/rice.png";

export default function LogoSection() {
  const logos = [
    {
      src: rice,
      alt: "Organic Rice",
    },
    {
      src: farm,
      alt: "Since 1995 Farm",
    },
    {
      src: fress,
      alt: "Farm Fresh",
    },
    {
      src: food,
      alt: "Food",
    },
    {
      src: eco,
      alt: "Eco Product",
    },
    {
      src: tractor,
      alt: "Tractor Farm Fresh",
    },
  ];

  return (
    <div className="bg-[#f9f9f2] py-8 border-t border-gray-200 flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-36">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
