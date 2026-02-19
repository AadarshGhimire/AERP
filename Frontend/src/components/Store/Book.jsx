import React from "react";
import { Target, Calculator, GitBranch, Cone } from "lucide-react";

export default function Book() {
  const tools = [
    {
      id: 1,
      title: "Bearing Load Calculator",
      desc: "Calculate bearing life",
      icon: <Calculator size={26} className="text-green-800" />,
      badge: "Free",
    },
    {
      id: 2,
      title: "Pipe Flow Designer",
      desc: "Fluid Flow Calculation Wizzard",
      icon: <GitBranch size={26} className="text-green-800" />,
      badge: "Free",
    },
    {
      id: 3,
      title: "Stress Calculator",
      desc: "Stress Concentration in a rectangular section with Two U-notches",
      icon: <Cone size={26} className="text-green-800" />,
      badge: "Free",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Banner */}
      <div className="bg-green-50 border border-green-200 rounded-2xl shadow-sm px-10 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2 border border-green-200">
              <Target className="text-red-500" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Access Engineering Tools
            </h1>
          </div>

          <p className="text-gray-700 mt-4 text-lg">
            Free tools available to all users. Subscribe for{" "}
            <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md">
              $9.99 <span className="text-sm font-normal">/month</span>
            </span>{" "}
            to unlock all premium tools.
          </p>
        </div>

        {/* Right Button */}
        <button className="bg-green-600 hover:bg-green-700 transition text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-md flex items-center gap-2 justify-center">
          Go Premium <span className="text-xl">→</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col justify-between min-h-[420px]"
          >
            {/* Icon */}
            <div>
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
                {tool.icon}
              </div>

              {/* Badge */}
              <span className="inline-block mt-4 px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-lg">
                {tool.badge}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mt-6">
                {tool.title}
              </h2>

              {/* Desc */}
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                {tool.desc}
              </p>
            </div>

            {/* Button */}
            <button className="mt-10 w-full bg-green-800 hover:bg-green-900 transition text-white py-4 rounded-xl font-semibold text-lg shadow-sm">
              Launch Tool
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
