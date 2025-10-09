import React from "react";

export default function HistoryTimeline() {
  const timeline = [
    {
      year: "1987",
      title: "Open my Farm",
      description:
        "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      description:
        "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      description:
        "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.",
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      description:
        "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
  ];

  return (
    <div className="bg-[#F8F7F0] w-full py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tagline */}
        <button className="text-green-700 border border-green-700 rounded-full px-4 py-1 text-sm mb-3">
          Our History
        </button>

        {/* Heading and description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Farming have been since <br /> 1866
          </h2>
          <p className="text-gray-600 max-w-md text-sm mt-4 md:mt-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-t border-gray-300 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  {/* Year */}
                  <div className="text-3xl font-bold text-gray-400">
                    {item.year}
                  </div>
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                </div>
                {/* Title and description */}
                <div className="mt-6">
                  <h3 className="text-gray-800 font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
