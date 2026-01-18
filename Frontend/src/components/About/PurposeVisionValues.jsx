import React from "react";
import { Target, Eye, Heart } from "lucide-react";

export default function PurposeVisionValues() {
  return (
    <section className="w-full bg-slate-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-[#0F172A] lg:text-4xl">
          Our Purpose, Vision & Values
        </h1>

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">

          {/* Purpose */}
          <div className="bg-white border border-emerald-700 rounded-lg p-5 shadow-sm min-h-[220px]">
            <Target className="text-emerald-700 w-7 h-7" />
            <h2 className="mt-3 text-lg font-semibold text-[#0F172A]">
              Purpose
            </h2>
            <p className="mt-2 text-sm text-body-text leading-relaxed">
              To remove the bottleneck in your process.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-emerald-700 rounded-lg p-5 shadow-sm min-h-[220px]">
            <Eye className="text-emerald-700 w-7 h-7" />
            <h2 className="mt-3 text-lg font-semibold text-[#0F172A]">
              Vision
            </h2>
            <p className="mt-2 text-sm text-body-text leading-relaxed">
              To provide a one-stop solution for your needs.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white border border-emerald-700 rounded-lg p-5 shadow-sm min-h-[220px]">
            <Heart className="text-emerald-700 w-7 h-7" />
            <h2 className="mt-3 text-lg font-semibold text-[#0F172A]">
              Values
            </h2>
            <p className="mt-2 text-sm text-body-text leading-relaxed">
              To understand VOC and provide the best project plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
