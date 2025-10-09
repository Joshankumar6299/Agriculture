import React from "react";
import image from '../assets/Image1.png';

import Icon from '../components/Icon'

export default function ContactPage() {
  return (
    <>
    <div className="bg-[#f5f4ec] min-h-screen p-6">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Mail Card */}
        <div className="bg-white rounded-2xl shadow p-6 relative">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-200 p-3 rounded-full">📧</div>
            <h3 className="ml-4 font-medium text-lg">Mail us 24/7</h3>
          </div>
          <p className="text-gray-600 mb-2">pbminfo@admin.com</p>
          <p className="text-gray-600">pbmadmin@info.com</p>
          <button className="absolute bottom-3 right-3 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition">
            ✕
          </button>
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-2xl shadow p-6 relative">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-200 p-3 rounded-full">📞</div>
            <h3 className="ml-4 font-medium text-lg">Call us 24/7</h3>
          </div>
          <p className="text-gray-600 mb-2">Phone: (+55) 654-545-5418</p>
          <p className="text-gray-600">Mobile: (+01) 654-545-1235</p>
          <button className="absolute bottom-3 right-3 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition">
            ✕
          </button>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-2xl shadow p-6 relative">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-200 p-3 rounded-full">📍</div>
            <h3 className="ml-4 font-medium text-lg">Our Locations</h3>
          </div>
          <p className="text-gray-600">
            4921 Ride Top, Anch St, Alaska 997998, USA main city.
          </p>
          <button className="absolute bottom-3 right-3 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition">
            ✕
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow">
        {/* Image */}
        <img
          src={image}
          alt="Farmer"
          className="w-150 h-150 object-cover"
        />

        {/* Form */}
        <div className="p-8">
          <span className="uppercase text-xs text-gray-500 tracking-wide">Get To Contact Us</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Have any Questions? Get in Touch!
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Username */}
              <input
                type="text"
                placeholder="Username"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
                required
              />
              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="4"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message ➜
            </button>
          </form>
        </div>
      </div>
    </div>

    <Icon/>

     <div className="w-full h-screen">
      <iframe
        title="Rajkot Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7239479551425!2d70.79321407516844!3d22.29161464312111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1e3768bb99%3A0x861747cadb13809!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1652887200000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </>
  );
}
