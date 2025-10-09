import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8F7F0] w-full">
      {/* Top Bar */}
      <div className="bg-[#EDDD5E] flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
        <div className="flex space-x-10 text-gray-800 text-sm font-medium ml-30">
          <a href="#">Farmers</a>
          <a href="#">Organic</a>
          <a href="#">Foods</a>
          <a href="#">Product</a>
        </div>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <div className="flex items-center space-x-2">
            <span className="bg-white rounded-full p-2">📞</span>
            <span className="text-sm">+1 (212) 255-511</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-white rounded-full p-2">📧</span>
            <span className="text-sm">noreply@pbminfotech.com</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Logo and Social */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img src="/logo.png" alt="Grimo Logo" className="h-8" />
            <span className="text-2xl font-bold text-gray-800">grimo</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
          </p>
          <div className="flex space-x-4 text-gray-700">
            <a href="#" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-6 text-xl">
            Professional & modern, a theme designed to help your business stand
            out from the rest.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            {/* Useful Link */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Useful Link</h4>
              <ul className="space-y-1">
                <li>Company</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Working Time */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Working Time</h4>
              <ul className="space-y-1">
                <li>
                  <span className="text-gray-600">Mon - Fri:</span>{" "}
                  <span className="text-gray-800">9.00am - 5.00pm</span>
                </li>
                <li>
                  <span className="text-gray-600">Saturday:</span>{" "}
                  <span className="text-gray-800">10.00am - 6.00pm</span>
                </li>
                <li>
                  <span className="text-gray-800">Sunday Closed</span>
                </li>
              </ul>
            </div>

            {/* Our Address */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Our Address</h4>
              <ul className="space-y-1">
                <li>Old Westbury 256, New York</li>
                <li>11201, United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-gray-500 text-sm">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <p className="mt-2">
          Copyright © 2024 Agrimo, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
