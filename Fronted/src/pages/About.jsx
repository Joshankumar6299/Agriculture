import React from 'react'
import formIcon from '../assets/formIcon.png'
import equipment from '../assets/equipment.png'
import heroImage from '../assets/heroImage.png'
import AgricultureServices from '../components/AgricultureServices'
import farmerImg from "../assets/staticbox.png"; // replace with your actual image
import { FaCommentDots } from "react-icons/fa";
import bgImage  from '../assets/bgImage.png'
import HistoryTimeline from '../components/HistoryTimeline'
import { FaSeedling  } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi"; 
import Testimonial from '../components/Testimonial'

function About() {
  return (
   <>
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
  
  <AgricultureServices/>


   <div className="bg-[#5e8f48] text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <div className="inline-block bg-white text-xs text-[#5e8f48] px-3 py-1 rounded-full mb-4">
            🌿 Get To Know Us
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Agriculture matters to the <br /> future of development
          </h1>
          <p className="text-sm text-gray-100 leading-relaxed ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.
          </p>

          <div className="relative mt-8">
            <img
              src={farmerImg}
              alt="Farmers in field"
              className="rounded-lg shadow-md"
            />
            <div className="absolute bottom-4 right-4 bg-yellow-300 text-black p-2 rounded-full shadow-md">
              <FaCommentDots size={20} />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-5">
          {/* Step 1 - highlighted box */}
          <div className="flex items-center bg-white text-[#5e8f48] rounded-lg p-6 shadow-md mt-50">
            <div className="text-3xl font-bold mr-4">01</div>
            <div>
              <h4 className="font-semibold">Schedule Your Experience</h4>
              <p className="text-sm text-gray-700">
                Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.
              </p>
            </div>
          </div>

          {/* Steps 2 - 4 */}
          {[
            {
              num: "02",
              title: "Get Professional Advice",
            },
            {
              num: "03",
              title: "Meet Our Expert Farmer",
            },
            {
              num: "04",
              title: "Now Get A Best Products",
            },
          ].map((step, i) => (
            <div key={i} className="flex items-start border-t border-white pt-4">
              <div className="text-xl font-bold text-white mr-4">{step.num}</div>
              <div>
                <h4 className="font-semibold text-white">{step.title}</h4>
                <p className="text-sm text-gray-200">
                  Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.
                </p>
              </div>
            </div>
          ))}
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
  

  <Testimonial/>
   </>
  )
}

export default About