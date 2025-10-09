import React from "react";
import farmerImg from "../assets/about-img.png"; // Replace with your actual image path
import { FaCircle } from "react-icons/fa";
import HistoryTimeline from '../components/HistoryTimeline'



const OrganicFarmsSection = () => {
  return (

    <>
    <div className="bg-[#fdfcf6] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left image */}
        <div>
          <img
            src={farmerImg}
            alt="Organic farmers"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Right content */}
        <div>
          <div className="inline-block bg-white text-xs text-gray-600 px-3 py-1 rounded-full mb-4 shadow-sm">
            ➤ About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b2b2b] mb-4 leading-snug">
            We’re Best Agriculture & <br /> Organic Farms
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-[#2b2b2b] mb-8">
            {[
              "Garlic Farming",
              "Lavender Farming",
              "Gourmet Mushrooms",
              "Fertilizer Distribution",
              "Poultry Farming",
              "Organic Fertilizer",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCircle className="text-yellow-400 text-[8px]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#4b7f2c] hover:bg-[#3f6e24] text-white px-6 py-3 rounded-full text-sm font-medium transition">
            Know More →
          </button>
        </div>
      </div>
    </div>


         {/* Scrolling Text Section */}
      <div className="py-8 bg-[#F8F7F0] relative overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-container {
            display: inline-flex;
            animation: scroll 20s linear infinite;
            white-space: nowrap;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex overflow-hidden">
          <div className="scroll-container">
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Agriculture</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Farming</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Organic</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Vegetables</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Agriculture</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Farming</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Organic</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Vegetables</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
          </div>
          <div className="scroll-container" aria-hidden="true">
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Agriculture</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Farming</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Organic</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Vegetables</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Agriculture</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Farming</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Organic</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">Vegetables</span>
            <span className="text-[80px] font-bold text-[#E8E8E8] mx-4 inline-block">*</span>
          </div>
        </div>
      </div>
         <HistoryTimeline/>

    </>
  );
};

// ✅ Export the correct component
export default OrganicFarmsSection;
