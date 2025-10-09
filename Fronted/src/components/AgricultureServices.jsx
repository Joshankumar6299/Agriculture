import React from 'react';
import service from '../assets/service.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';

const services = [
  {
    title: "Harvest Concepts",
    category: "FERTILIZER",
    image: service, // updated
  },
  {
    title: "Farming Products",
    category: "FRUITS",
    image: service1, // updated
  },
  {
    title: "Soil fertilization",
    category: "FERTILIZER",
    image: service2, // updated
  },
  {
    title: "Fresh vegetables",
    category: "FRUITS",
    image: service3, // updated
  },
];

const AgricultureServices = () => {
  return (
    <div className="bg-[#f9f9ed] py-12 text-center text-[#2b2b2b]">
      <div className="inline-block bg-white text-xs text-gray-600 px-3 py-1 rounded-full mb-3">
        Who We Are
      </div>
      <h2 className="text-3xl font-bold mb-10">Best Agriculture Services</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-md p-6 w-64 flex flex-col items-center"
          >
            <div className="absolute top-4 right-4 bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm">
              ✈
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-28 h-28 rounded-full object-cover border-4 border-green-600 mb-4"
            />
            <p className="text-green-600 text-xs font-medium mb-1">
              ● {service.category}
            </p>
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot === 0 ? "bg-yellow-300" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgricultureServices;
