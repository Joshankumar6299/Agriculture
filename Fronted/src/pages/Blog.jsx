import React from "react";
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import blog4 from '../assets/blog-4.png'
import blog5 from '../assets/blog-5.png'
import blog6 from '../assets/blog-6.png'
import blog7 from '../assets/blog-7.png'
import blog8 from '../assets/blog-8.png'
import blog9 from '../assets/blog-9.png'
import { FiArrowUpRight } from "react-icons/fi";
const categories = ["All", "Agriculture", "Extensive", "Farming Tips", "Food Crops", "Mixed Farming", "Organic Farm"];

const blogPosts = [
  {
    id: 1,
    image:blog1 ,
    tag: "FOOD CROPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "What technology is used in vertical farming?",
  },
  {
    id: 2,
    image:blog2,
    tag: "ORGANIC FARM",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "Which type of farming is more prevalent today?",
  },
  {
    id: 3,
    image: blog3,
    tag: "FARMING TIPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "The Farmers Sentiment Darkens Hopes Fade",
  },
  {
    id: 4,
    image: blog4,
    tag: "FOOD CROPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "A farmer is a person who works in agriculture?",
  },
  {
    id: 5,
    image:blog5,
    tag: "ORGANIC FARM",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "Organic Fruits: Hidden Advantages And Information?",
  },
  {
    id: 6,
    image:blog6,
    tag: "FARMING TIPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "How to Include Organic Vegetables in Your Diet",
  },
  {
    id: 7,
    image:blog7,
    tag: "FOOD CROPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "Agricultural Infrastructure in Rural Areas?",
  },
  {
    id: 8,
    image: blog8,
    tag: "ORGANIC FARM",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "Are You Prepared for the Upcoming Season?",
  },
  {
    id: 9,
    image: blog9,
    tag: "FARMING TIPS",
    date: "MARCH 18, 2024",
    author: "ADMIN",
    title: "A Beginner’s Guide for Managing a Successful Farm",
  },
  // Add all other posts...
];

export default function BlogGrid() {
  return (
    <div className="bg-[#f5f4ec] min-h-screen p-6">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm ${
              idx === 0 ? "bg-gray-900 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            {/* Image */}
            <div className="relative group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                {post.tag}
              </span>
              <button className="absolute bottom-3 right-3 bg-yellow-300 rounded-full p-2 text-gray-800 hover:bg-yellow-400 transition-colors duration-300">
                <FiArrowUpRight/>
              </button>
            </div>

            {/* Details */}
            <div className="p-4">
              <p className="text-gray-500 text-xs mb-1">
                📅 {post.date} &nbsp; | &nbsp; 👤 {post.author}
              </p>
              <h3 className="font-medium text-lg text-gray-800 hover:text-gray-600 cursor-pointer">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
