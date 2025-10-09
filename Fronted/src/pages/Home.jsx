import React from 'react'
import farmer from '../assets/farmer.png'
import vegetable from '../assets/vegetable.png'
import agriculture from '../assets/agriculture.png'
import guarantee from '../assets/guarantee.png'
import formIcon from '../assets/formIcon.png'
import equipment from '../assets/equipment.png'
import heroImage from '../assets/heroImage.png'
import harvestImg from '../assets/harvestImg.png'
import farmingImg  from '../assets/farmingImg.png'
import soilImg from '../assets/soilImg.png'
import { FaLeaf, FaCarrot, FaSeedling, FaAppleAlt } from "react-icons/fa";
import img from '../assets/img.png'
import Testimonial from '../components/Testimonial'
import Icon from '../components/Icon'
import HistoryTimeline from '../components/HistoryTimeline'
import farmerImage from "../assets/farmerImage.png"; 
import bgImage  from '../assets/bgImage.png'
import { FiArrowUpRight } from "react-icons/fi"; // arrow icon

import img1 from "../assets/img1.png"; // replace with actual paths
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";



function Home() {
  const images = [img1, img2, img3, img4];
  return (
    <>
      {/* Features Section */}
      <section className="features-section bg-[#F8F7F0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professional Farmers Card */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm relative">
              <div className="icon-wrapper bg-[#FFE145] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <img src={farmer} alt="Farmer" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Farmers</h3>
              <p className="text-gray-600 mb-8">Nullum porta enim vel tellus commodo, eget laoreet otio ultrices.</p>
              <button className="absolute bottom-6 right-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Fresh Vegetables Card */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm relative">
              <div className="icon-wrapper bg-[#FFE145] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <img src={vegetable} alt="Vegetables" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Vegetables</h3>
              <p className="text-gray-600 mb-8">Nullum porta enim vel tellus commodo, eget laoreet otio ultrices.</p>
              <button className="absolute bottom-6 right-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Agriculture Products Card */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm relative">
              <div className="icon-wrapper bg-[#FFE145] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <img src={agriculture} alt="Agriculture" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agriculture Products</h3>
              <p className="text-gray-600 mb-8">Nullum porta enim vel tellus commodo, eget laoreet otio ultrices.</p>
              <button className="absolute bottom-6 right-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* 100% Guaranteed Card */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm relative">
              <div className="icon-wrapper bg-[#FFE145] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <img src={guarantee} alt="Guaranteed" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Guaranteed</h3>
              <p className="text-gray-600 mb-8">Nullum porta enim vel tellus commodo, eget laoreet otio ultrices.</p>
              <button className="absolute bottom-6 right-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#F8F7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left Content and Image */}
            <div className="lg:w-7/12">
              <div className="relative mb-8 left-40">
                <img src={formIcon} alt="Farmer harvesting" className="w-[500px] h-[500px] object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-76 bg-[#FFE145] rounded-xl px-6 py-6 shadow-lx ">
                  <div className="text-4xl font-bold">435<span className="text-3xl align-super">+</span></div>
                  <p className="text-sm font-medium">Growth Tons of Harvest</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-5/10">
              <div className="space-y-6 right-10">
                <span className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full">Who We Are</span>
                <h2 className="text-4xl lg:text-[60px] font-bold leading-tight">
                  Currently we are growing and selling organic food
                </h2>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                </p>

                {/* Stats Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <img src={equipment} alt="Farm Icon" className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Eco Farms Worldwide</h3>
                      <p className="text-sm text-gray-500">ages of Lorem ipsum available majority have suffered.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <img src={heroImage} alt="Equipment Icon" className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Special Equipment</h3>
                      <p className="text-sm text-gray-500">ages of Lorem ipsum available majority have suffered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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



      {/* Best Agriculture Services Section */}
      <section className="py-16 bg-[#518B41]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-sm font-medium text-white bg-white/20 px-4 py-2 rounded-full">Our Services</span>
            <h2 className="text-4xl font-bold text-white mt-4">Best Agriculture Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Harvest Concepts Card */}
            <div className="bg-white rounded-2xl p-4 group">
              <div className="relative mb-6">
                <img src={harvestImg} alt="Harvest" className="w-full h-64 object-cover rounded-xl" />
                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">FERTILIZER</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Harvest Concepts</h3>
              <p className="text-gray-600 mb-4">Farming and animal husbandry and discuss with farmers and scientists.</p>
              <button className="bg-[#FFE145] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#518B41] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-black group-hover:text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>

            {/* Farming Products Card */}
            <div className="bg-white rounded-2xl p-4 group">
              <div className="relative mb-6">
                <img src={farmingImg} alt="Farming" className="w-full h-64 object-cover rounded-xl" />
                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">FRUITS</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Farming Products</h3>
              <p className="text-gray-600 mb-4">Farming and animal husbandry and discuss with farmers and scientists.</p>
              <button className="bg-[#FFE145] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#518B41] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-black group-hover:text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>

            {/* Soil Fertilization Card */}
            <div className="bg-white rounded-2xl p-4 group">
              <div className="relative mb-6">
                <img src={soilImg} alt="Soil" className="w-full h-64 object-cover rounded-xl" />
                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">FERTILIZER</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Soil Fertilization</h3>
              <p className="text-gray-600 mb-4">Farming and animal husbandry and discuss with farmers and scientists.</p>
              <button className="bg-[#FFE145] rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#518B41] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-black group-hover:text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-8 gap-2">
            <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-white transform rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

 <div className="bg-[#f9f9f2] py-12 flex flex-col items-center">
      {/* Tagline */}
      <button className="text-green-700 border border-green-700 rounded-full px-4 py-1 text-sm mb-3">
        Grow Naturally
      </button>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Choose What's Perfect <br /> For Your Field
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-5xl w-full px-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-8 md:space-y-10 text-right md:text-left">
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="bg-yellow-300 text-white rounded-full p-4">
              <FaLeaf className="text-2xl text-green-800" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Agriculture Products
              </h3>
              <p className="text-gray-500 text-sm">
                Nullam porta enim vel tellus convallis, eget laoreet odio ultricies.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="bg-yellow-300 text-white rounded-full p-4">
              <FaSeedling className="text-2xl text-green-800" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Quality Products
              </h3>
              <p className="text-gray-500 text-sm">
                Nullam porta enim vel tellus convallis, eget laoreet odio ultricies.
              </p>
            </div>
          </div>
        </div>

        {/* Center Corn Image */}
        <div className="my-10 md:my-0 md:mx-8">
          <img
            src={img}
            alt="Corn"
            className="w-64 md:w-72"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-8 md:space-y-10">
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="bg-yellow-300 text-white rounded-full p-4">
              <FaCarrot className="text-2xl text-green-800" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Fresh Vegetables
              </h3>
              <p className="text-gray-500 text-sm">
                Nullam porta enim vel tellus convallis, eget laoreet odio ultricies.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="bg-yellow-300 text-white rounded-full p-4">
              <FaAppleAlt className="text-2xl text-green-800" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Pure & Organic
              </h3>
              <p className="text-gray-500 text-sm">
                Nullam porta enim vel tellus convallis, eget laoreet odio ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


 <div className="bg-[#F8F7F0] w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-sm">
            <img
              src={src}
              alt={`Farming ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>

<Testimonial/>
<Icon/>
    


<div className="bg-[#F8F7F0] w-full flex flex-col md:flex-row rounded-none">
  {/* Left Image */}
  <div className="md:w-1/2 relative">
    <img
      src={farmerImage}
      alt="Farmer in field"
      className="w-full h-full object-cover md:translate-x-52" // shift right
    />
  </div>

  {/* Right Content */}
  <div className="md:w-1/3 bg-[#EDDD5E] p-10 flex flex-col justify-center rounded-xl">
    <button className="text-green-700 border border-green-700 rounded-full px-8 py-2 text-sm mb-6">
      What We Do
    </button>

    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Healthy life with fresh products
    </h2>

    <p className="text-gray-700 text-sm mb-6">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don’t look even.
    </p>

    <div className="flex flex-col sm:flex-row gap-6">
      {/* Eco Farms Stat */}
      <div className="flex items-center space-x-3">
        <div className="relative w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">90%</span>
        </div>
        <div className="text-gray-800 text-sm font-medium">
          Eco Farms <br /> Worldwide
        </div>
      </div>

      {/* Special Equipment Stat */}
      <div className="flex items-center space-x-3">
        <div className="relative w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">78%</span>
        </div>
        <div className="text-gray-800 text-sm font-medium">
          Special <br /> Equipment
        </div>
      </div>
    </div>
  </div>
</div>


<HistoryTimeline/>


<div className="bg-[#F8F7F0] w-full flex justify-center py-6">
      <div
        className="relative w-full max-w-7xl rounded-[30px] overflow-hidden h-60"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-between items-center p-6 md:p-10">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Yellow Circle Icon */}
            <div className="w-14 h-14 bg-[#EDDD5E] rounded-full flex items-center justify-center text-gray-800 text-2xl">
              <FaSeedling />
            </div>
            {/* Text */}
            <h2 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
              We’re popular leader in <br />
              agriculture market globally
            </h2>
          </div>

          {/* Right Button */}
          <button className="bg-white rounded-full px-5 py-2 text-sm text-gray-800 flex items-center space-x-2 hover:shadow-lg transition">
            <span>Discover More</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home