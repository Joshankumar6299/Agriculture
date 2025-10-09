import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../data/teamData";

export default function TeamMember() {
  return (
    <div className="bg-[#fafaf3] min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            to={`/about/TeamMember/${member.id}`}
            state={member}
            className="block group"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center relative cursor-pointer group-hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <div className="text-center">
                <p className="text-gray-500 text-xs uppercase">{member.role}</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
              </div>
              <button className="absolute bottom-3 right-3 bg-yellow-300 p-2 rounded-full group-hover:bg-yellow-400 transition">
                ➝
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
