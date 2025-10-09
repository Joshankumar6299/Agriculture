import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
        </div>

        {/* Pricing moved to a dedicated /pricing page */}

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="group block">
              <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-56 object-cover" src={service.img} alt={service.title} />
                <div className="p-6 bg-white"><h3 className="text-xl font-semibold text-gray-900">{service.title}</h3><p className="mt-2 text-base text-gray-500">{service.description}</p></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}