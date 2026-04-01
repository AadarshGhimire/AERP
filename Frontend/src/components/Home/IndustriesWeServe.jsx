import React, { useRef } from "react";
import {
  Fuel,
  Zap,
  Factory,
  FlaskConical,
  Plane,
  Shield,
  Utensils,
  Pickaxe,
  Building2,
  Droplets,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FadeInSection from "../Animation/FadeInSection.jsx";
export default function IndustriesWeServe() {
  const scrollRef = useRef(null);

  const industries = [
    {
      icon: <Fuel className="industries-we-serve-card-icon" />,
      title: "Oil & Gas",
      subtitle1: "Upstream & Midstream",
      subtitle2: "Refining & Petrochemical",
    },
    {
      icon: <Zap className="industries-we-serve-card-icon" />,
      title: "Power Generation",
      subtitle1: "Plants & Turbines",
      subtitle2: "Utilities & Energy",
    },
    {
      icon: <Factory className="industries-we-serve-card-icon" />,
      title: "Manufacturing",
      subtitle1: "Reliability & Uptime",
      subtitle2: "Process Industries",
    },
    {
      icon: <FlaskConical className="industries-we-serve-card-icon" />,
      title: "Chemical",
      subtitle1: "Processing & Storage",
      subtitle2: "Process & Turnarounds",
    },
    {
      icon: <FlaskConical className="industries-we-serve-card-icon" />,
      title: "Pharmaceutical",
      subtitle1: "GMP & Validation",
      subtitle2: "Production & Research",
    },
    {
      icon: <Plane className="industries-we-serve-card-icon" />,
      title: "Aerospace",
      subtitle1: "Precision & Compliance",
      subtitle2: "Safety & Performance",
    },
    {
      icon: <Shield className="industries-we-serve-card-icon" />,
      title: "Defense",
      subtitle1: "Mission-Critical Systems",
      subtitle2: "Compliance & Reliability",
    },
    {
      icon: <Utensils className="industries-we-serve-card-icon" />,
      title: "Food & Beverage",
      subtitle1: "Hygiene & Throughput",
      subtitle2: "Quality & Safety",
    },
    {
      icon: <Pickaxe className="industries-we-serve-card-icon" />,
      title: "Mining & Metals",
      subtitle1: "Heavy Equipment",
      subtitle2: "Production & Maintenance",
    },
    {
      icon: <Building2 className="industries-we-serve-card-icon" />,
      title: "Cement & Aggregates",
      subtitle1: "Kilns & Mills",
      subtitle2: "Continuous Operations",
    },
    {
      icon: <Droplets className="industries-we-serve-card-icon" />,
      title: "Water & Wastewater",
      subtitle1: "Treatment & Pumping",
      subtitle2: "Infrastructure & Utilities",
    },
    {
      icon: <Database className="industries-we-serve-card-icon" />,
      title: "Data Centers",
      subtitle1: "Critical Cooling & Power",
      subtitle2: "High Availability Systems",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <FadeInSection>
    <section className="w-full bg-white py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Supporting critical industries with specialized asset integrity
            solutions and technical expertise
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="mt-12 flex justify-between items-center">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="group industries-we-serve-card w-[260px]  lg:w-[300px] flex-shrink-0"
            >
              <div className="industries-we-serve-card-text">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-600">{item.subtitle1}</p>
              <p className="text-slate-500 text-sm mt-1">{item.subtitle2}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </FadeInSection>
  );
}
