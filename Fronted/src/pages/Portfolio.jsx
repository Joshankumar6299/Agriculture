import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { imageData } from "../data/imageData";

const Portfolio = () => {
  return (
    <section className="bg-[#FAFAF0] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {imageData.map((item) => (
          <Link to={`/portfolio/${item.id}`} key={item.id}>
            <div className="bg-white rounded-4xl shadow-sm overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <span className="text-xs uppercase text-yellow-600 font-medium">
                  ● {item.category}
                </span>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              </div>
              <div className="absolute bottom-4 right-4 bg-yellow-100 p-2 rounded-full cursor-pointer hover:bg-yellow-300 transition-colors">
                <FiArrowUpRight size={18} className="text-yellow-700" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
