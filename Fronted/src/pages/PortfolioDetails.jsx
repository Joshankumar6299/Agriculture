// src/pages/PortfolioDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { imageData } from "../data/imageData";

const PortfolioDetails = () => {
  const { id } = useParams();
  const item = imageData[parseInt(id)];

  if (!item) {
    return <div className="p-8 text-center text-gray-600">Portfolio item not found.</div>;
  }

  return (
    
    <section className="bg-[#FAFAF0] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[400px] overflow-hidden">
        <img src={item.img} alt="Portfolio Banner" className="w-300 h-150 object-cover mt-10 ml-40 rounded-2xl " />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="bg-white p-6 rounded-2xl shadow space-y-4 text-sm text-gray-700">
          <div><strong>Client:</strong> {item.client}</div>
          <div><strong>Team:</strong> {item.team}</div>
          <div><strong>Service:</strong> Agriculture Products</div>
          <div><strong>Category:</strong> {item.category}</div>
          <Link to="/portfolio" className="block text-green-700 mt-4 hover:underline">← Back to Portfolio</Link>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Better Agriculture for Better Future</h2>
            <p className="text-gray-600">{item.overview}</p>
          </section>

          {/* Dual Images */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img src={item.img} alt="Sub 1" className="rounded-xl object-cover w-full h-56" />
            <img src={item.img} alt="Sub 2" className="rounded-xl object-cover w-full h-56" />
          </section>

          {/* Everything on our farm is grown */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Everything on our farm is grown</h2>
            <p className="text-gray-600 mb-4">
              They offer dedicated R&D, highly sustainable seeds, and crop health systems with national agronomical practices...
            </p>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Helping clients who prefer to grow own types of product lines.</li>
              <li>Increase research awareness with AI improvements in automation.</li>
              <li>Keep yourself covered and on top of future farming trends.</li>
              <li>Made with the earth in mind, make this planet greener.</li>
            </ul>
          </section>

          {/* 3-Step Process */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {item.points.map((step, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-yellow-500 mb-2">0{index + 1}</h3>
                <h4 className="font-semibold text-lg mb-1">{step}</h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci a justo.
                </p>
              </div>
            ))}
          </section>

          {/* Success Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">We do Creative Things for Success</h2>
            <p className="text-gray-600">
              They offer dedicated R&D, highly sustainable seeds, and crop health systems with national agronomical practices...
            </p>
          </section>

          {/* Quote Box */}
          <section className="bg-white rounded-2xl p-6 shadow text-sm text-gray-700 italic">
            {item.quote}
          </section>
        </main>
      </div>
    </section>
  );
};

export default PortfolioDetails;
