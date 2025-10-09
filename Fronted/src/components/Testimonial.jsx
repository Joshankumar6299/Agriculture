import React from "react";
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonial1 from '../assets/testimonial1.png'
import testimonial2 from '../assets/testimonial2.png'
import testimonial3 from '../assets/testimonial3.png'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Martin Bailey",
      role: "SUPERVISOR",
      image: testimonial1,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      name: "Emma Greed",
      role: "CUSTOMER",
      image: testimonial2,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      name: "Daniel Craig",
      role: "CO FOUNDER",
      image: testimonial3,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
  ];

  return (
    <div className="bg-[#f9f9f2] py-12 px-4 flex flex-col items-center">
      {/* Tagline */}
      <button className="text-green-700 border border-green-700 rounded-full px-4 py-1 text-sm mb-3">
        Testimonial
      </button>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        What our customers say
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 shadow-sm w-full md:w-80"
          >
            <div className="absolute top-4 right-4 text-yellow-400 text-3xl">
              <FaQuoteRight />
            </div>
            <div className="flex items-center mb-4">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-gray-600 text-sm mb-6">“{t.text}”</p>
            <div className="flex items-center space-x-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{t.name}</h4>
                <p className="text-gray-500 text-xs uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex space-x-2 mt-6">
        <button className="w-8 h-8 rounded border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
          <FaChevronLeft />
        </button>
        <button className="w-8 h-8 rounded border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
