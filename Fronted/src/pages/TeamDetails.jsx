import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { teamMembers } from "../data/teamData";

export default function TeamMemberDetails() {
  const location = useLocation();
  const { id } = useParams();

  // Prefer state from navigation, but find by ID as a fallback for direct links/refresh
  const member = location.state || teamMembers.find(m => m.id === parseInt(id));

  // If no data is passed, show fallback
  if (!member) {
    return <div className="p-8 text-center text-gray-600">Team member not found. <Link to="/about/TeamMember" className="text-green-600 hover:underline">Go back</Link></div>;
  }


  const items = [
    "Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.",
    "Sed ac ultricies neque Pellentesque pharetra ipsum in efficitur hendrerit integer fermentum elit ut auctor venenatis.",
    "Tiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget dui elit adipiscing Etiam rhoncus.",
    "Eget tempus tellus condimentum rhoncus sem quam semper libero sit amet tempus adipiscing.",
  ];

  const SkillCircle = ({ percent, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 border-[6px] border-green-700 rounded-full flex items-center justify-center text-xl font-bold bg-white mb-2">
      {percent}
    </div>
    <span className="font-semibold leading-tight">{label}</span>
  </div>
);

const AwardItem = ({ year, title }) => (
  <div className="bg-gray-100 rounded-lg px-4 py-3 font-semibold text-sm">
    {year} : {title}
  </div>
);


  return (
    <div className="bg-[#fafaf3] min-h-screen p-6 md:p-12">
      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left: Profile Image */}
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-100 h-100 object-cover"
          />
        </div>

        {/* Right: Profile Content */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs text-green-600 tracking-wide mb-2 font-semibold">
              {member.role}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {member.name}
            </h1>
            <p className="text-gray-600 mb-6">{member.bio}</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <strong className="text-gray-700">Birthday:</strong>{" "}
                12th March 1985
              </li>
              <li>
                <strong className="text-gray-700">Phone:</strong>{" "}
                +1 234-567-8910
              </li>
              <li>
                <strong className="text-gray-700">Email:</strong>{" "}
                example@email.com
              </li>
              <li>
                <strong className="text-gray-700">Location:</strong>{" "}
                Farmhouse #7, Green Valley
              </li>
            </ul>
          </div>

          <div className="flex space-x-3 mt-6">
            <button className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-lg">
              f
            </button>
            <button className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-lg">
              g
            </button>
            <button className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-lg">
              in
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Personal information
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {member.name} Developed multipurpose rubber dam for watershed to reduce soil erosion, create water storage facility, enhance ground water recharge and quick & safe disposal of sediments. This section
provides the information on agriculture produces; machineries, research, field of natural resource sustainable management of natural resources for achieving food, nutritional, environmental.
        </p>
        <br />
        <p className="text-gray-600 leading-relaxed">They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs. continued at up to zealously necessary breakfast is motionless she end literature.
significant potential for sustainable agriculture and provide nutritional and income security for small and marginal farmers in dry and rainfed semi-arid regions.</p>
<br />
<p className="text-gray-600 leading-relaxed">They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs. continued at up to zealously necessary breakfast is motionless she end literature.
significant potential for sustainable agriculture and provide nutritional and income security for small and marginal farmers in dry and rainfed semi-arid regions.</p>
      </div>

      <div className="bg-[#fafaf3] text-gray-800 h-90 p-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Professional Skills */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-2 ml-24">Professional Skills</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed ml-24">
            As an aspiring farmer, it’s important to work on your skill set for this particular profession. Not only can improving
            your farmer skills help you in future interviews, but it can also help you on the job. In this article, we explain what
            farmer skills are, provide examples, them in the job application and interview process.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 ml-24">
            {/* Skill Item */}
            <SkillCircle percent="75%" label="Analytical Skills" />
            <SkillCircle percent="80%" label="Farming Skills" />
            <SkillCircle percent="90%" label="Problem Solving" />
          </div>
        </div>

        {/* Awards & Honors */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Awards & Honors</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs.
            continued at up to zealously necessary
          </p>

          <div className="bg-white rounded-xl p-5 flex flex-col gap-4">
            <AwardItem year="2016 - 2017" title="Best of best agricultural farming" />
            <AwardItem year="2018 - 2020" title="Agricultural excellence award" />
            <AwardItem year="2021 - 2022" title="National agricultural expert award" />
          </div>
        </div>
      </div>
    </div>

      {/* Everything on Farm */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Everything on our farm is grown
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Farmer skills refer to the expertise, talents or abilities you have that help you perform a farmer’s daily duties. Key farmer skills include problem-solving, interpersonal, farm management
organizational skills. You can use these skills to use in a variety of ways, from communicating with farmhands to tending crops and repairing machinery. Having these skills can help you in the
farming profession and help you stand out among other job applicants.
        </p>
      </div>

       <div className="bg-[#fafaf3] p-6 rounded-xl ml-27">
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-4 mb-4">
          {/* Yellow Circle with Check */}
          <div className="w-6 h-6 flex items-center justify-center bg-yellow-300 rounded-full">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Text */}
          <p className="text-gray-800 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>

      {/* Message Form */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Send a message
        </h3>
        <form className="space-y-4">
          <textarea
            placeholder="Message"
            className="w-full border rounded-lg p-3"
            rows="4"
          ></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition"
          >
            Submit Now →
          </button>
        </form>
      </div>
    </div>
  );
}
