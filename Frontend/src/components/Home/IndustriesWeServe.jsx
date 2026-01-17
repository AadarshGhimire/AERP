import React from "react";
import { Fuel, FlaskConical, Zap, Factory } from "lucide-react";

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-white py-24">
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

        {/* Cards */}
        <div className="mt-16 grid gap-8
                        grid-cols-1 lg:grid-cols-4
                        justify-items-center">

          {/* Card 1 */}
          <div className="w-full max-w-xs h-56 border border-slate-200 rounded-xl
                          bg-slate-50 flex flex-col items-center justify-center
                          text-center gap-3 shown transition">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Fuel className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Oil & Gas</h3>
            <p className="text-slate-600">Refining & Petrochemical</p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-xs h-56 border border-slate-200 rounded-xl
                          bg-slate-50 flex flex-col items-center justify-center
                          text-center gap-3 transition">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Zap className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Power Generation
            </h3>
            <p className="text-slate-600">Utilities & Energy</p>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="w-full max-w-xs h-56 rounded-xl border border-slate-200
                          bg-slate-50 flex flex-col items-center justify-center
                          text-center gap-3 shadow-md transition">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Factory className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Manufacturing
            </h3>
            <p className="text-slate-600">Process Industries</p>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-xs h-56 border border-slate-200 rounded-xl
                          bg-slate-50 flex flex-col items-center justify-center
                          text-center gap-3 transition">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <FlaskConical className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Chemical</h3>
            <p className="text-slate-600">Processing & Storage</p>
          </div>

        </div>
      </div>
    </section>
  );
}
