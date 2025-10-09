import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "../assets/Image.png";
import { useAuth } from "../context/AuthContext";
import UserIcon from "../assets/user-icon.png"; // We will create this asset

export default function Header() {
  const location = useLocation();
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // To control dropdown

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Define page titles and subtitles
  const pageInfo = {
    "/": {
      title: "Quality Trust: Direct to the Farm",
      subtitle:
        "We all need a little space to grow. Give yourself the space you need to bring out your inner you.",
      buttonText: "BELIEVE IN QUALITY!",
    },
    "/about": {
      title: "About Us",
      subtitle:
        "Learn about our journey and commitment to sustainable agriculture",
      buttonText: "OUR STORY",
    },
    "/about/History": {
      title: "Our History",
      subtitle: "Explore the milestones of our agricultural journey",
      buttonText: "SEE HISTORY",
    },
    "/about/TeamMember": {
      title: "Our Team Member",
      subtitle: "Meet the passionate team behind our success",
      buttonText: "MEET THE TEAM",
    },
    "/about/faq": {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common queries about our services",
      buttonText: "VIEW FAQ",
    },
    "/services": {
      title: "Our Services",
      subtitle: "Discover our comprehensive agricultural solutions",
      buttonText: "EXPLORE SERVICES",
    },
    "/portfolio": {
      title: "Our Portfolio",
      subtitle:
        "View our successful agricultural projects and achievements",
      buttonText: "SEE OUR WORK",
    },
    "/blog": {
      title: "Latest Updates",
      subtitle:
        "Stay informed with our agricultural insights and news",
      buttonText: "READ MORE",
    },
    "/contact": {
      title: "Get in Touch",
      subtitle: "Connect with us for all your agricultural needs",
      buttonText: "REACH OUT",
    },
  };

  const currentPage = pageInfo[location.pathname] || pageInfo["/"];

  return (
    <div className="relative w-full h-160 overflow-hidden">
      {/* Background Image */}
      <img
        src={Image}
        alt="Farm Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Header */}
      <header className="absolute top-0 w-full flex justify-between items-center px-8 py-5 z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-white font-bold text-2xl">Agrimo</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-medium relative">
          <Link
            to="/"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/" ? "text-yellow-400" : ""
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`hover:text-yellow-400 transition-colors ${
                location.pathname.startsWith("/about")
                  ? "text-yellow-400"
                  : ""
              }`}
            >
              About
            </button>

            {/* Dropdown */}
            {aboutOpen && (
              <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48">
                <Link
                  to="/about"
                  className="block px-4 py-3 hover:bg-yellow-100 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/about/History"
                  className="block px-4 py-3 hover:bg-yellow-100 transition-colors"
                >
                  Our History
                </Link>
                <Link
                  to="/about/TeamMember"
                  className="block px-4 py-3 hover:bg-yellow-100 transition-colors"
                >
                  Our Team Member
                </Link>
                <Link
                  to="/about/faq"
                  className="block px-4 py-3 hover:bg-yellow-100 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            to="/services"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/services" ? "text-yellow-400" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/pricing" ? "text-yellow-400" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/portfolio"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/portfolio" ? "text-yellow-400" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/blog" ? "text-yellow-400" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`hover:text-yellow-400 transition-colors ${
              location.pathname === "/contact" ? "text-yellow-400" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Call Now & Button */}
        {!loading && (
          user ? (
            <div className="hidden md:flex items-center space-x-4 relative">
              {/* Profile Dropdown */}
              <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2 focus:outline-none">
                  <img
                    src={
                      user.profileImagePath
                        ? `${import.meta.env.VITE_API_URL}/${user.profileImagePath.replace(/\\/g, '/')}`
                        : UserIcon
                    }
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-white font-medium">{user.fullName}</span>
                </button>

                {/* Dropdown Menu */}
                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md" onMouseLeave={() => setProfileOpen(false)}>
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-3 hover:bg-yellow-100 transition-colors"
                    >
                      Profile
                    </Link>
                    <button onClick={handleLogout} className="w-full text-left block px-4 py-3 hover:bg-red-100 text-red-600 transition-colors">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-white text-sm">
              <p className="font-bold">Call us Now</p>
              <p>+91 6299448945</p>
            </div>
            <Link to="/login" className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-sm text-gray-800 px-4 py-2 rounded-full">
              Get In Touch
            </Link>
          </div>
        ))}
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-[90vh] px-8 md:px-16">
        <button className="bg-transparent border border-white text-white px-3 py-1 rounded-full mb-4 text-sm hover:bg-white hover:text-black transition-colors">
          {currentPage.buttonText}
        </button>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
          {currentPage.title}
        </h1>
        <p className="text-white mb-6 max-w-xl">{currentPage.subtitle}</p>
        <Link
          to="/contact"
          className="bg-white text-gray-800 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-200 transition-colors shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
