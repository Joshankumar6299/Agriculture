// src/pages/ServiceDetails.jsx
import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiArrowUpRight, FiDownload, FiCheckCircle } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { servicesData, faqData } from "../data/servicesData";

const ServiceDetails = () => {
  const [openFaqs, setOpenFaqs] = useState([0]); // Keep the first FAQ open by default
  const { id: serviceId } = useParams();
  const currentServiceId = parseInt(serviceId, 10);

  const service = servicesData.find(s => s.id === currentServiceId);

  if (!service) {
    // Or render a "Not Found" component
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaqs((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        : [...prevOpen, index]
    );
  };

  return (
    <section className="bg-[#FAFAF0] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          {/* Services list */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Our Service</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              {servicesData.map((s) => (
                <Link to={`/services/${s.id}`} key={s.id}>
                  <li
                    className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                      s.id === currentServiceId
                        ? "bg-green-100 text-green-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span>{s.title}</span>
                    <FiArrowUpRight />
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-green-700 rounded-2xl text-white text-center p-6">
            <p className="text-lg font-semibold">Innovative Solutions for agriculture</p>
            <button className="mt-6 px-5 py-2 bg-white text-green-800 font-semibold rounded-full hover:bg-gray-200">
              Contact Us Now
            </button>
          </div>

          {/* Downloads */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-base font-semibold mb-4">Company Profile</h4>
            <div className="space-y-4 text-sm">
              <button className="w-full flex items-center justify-between bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                Download PDF <FiDownload />
              </button>
              <button className="w-full flex items-center justify-between bg-yellow-200 px-4 py-2 rounded-full hover:bg-yellow-300 transition">
                Download DOC File <FiDownload />
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:col-span-3 space-y-10">
          {/* Banner */}
          <div className="w-full rounded-2xl overflow-hidden">
            <img src={service.img} alt={service.title} className="w-full h-80 object-cover" />
          </div>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose {service.title}</h2>
            <p className="text-gray-600 mb-6">
              {service.content.whyChoose}
            </p>

            {/* 3 Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
              {["Schedule Your Experience", "Get Professional Advice", "Meet Our Expert People"].map(
                (title, i) => (
                  <div key={i}>
                    <h3 className="text-4xl font-bold text-yellow-500 mb-2">0{i + 1}</h3>
                    <h4 className="font-semibold text-lg mb-2">{title}</h4>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci a justo.
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Work Points */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Modern Technique Work Points</h2>
            <ul className="space-y-3 text-gray-600 text-sm">
              {service.content.workPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FiCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div
                    onClick={() => toggleFaq(i)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h4
                      className={`font-medium text-sm ${
                        openFaqs.includes(i) ? "text-green-700" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </h4>
                    {openFaqs.includes(i) ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openFaqs.includes(i) && (
                    <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default ServiceDetails;
