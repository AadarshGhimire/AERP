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
        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-4 justify-items-center">

          {/* Card 1 */}
          <div className="group industries-we-serve-card">
            <div className="industries-we-serve-card-text">
            <Fuel className="industries-we-serve-card-icon" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Oil & Gas</h3>
            <p className="text-slate-600">Refining & Petrochemical</p>
          </div>

          {/* Card 2 */}
          <div className="group industries-we-serve-card">
            <div className="industries-we-serve-card-text">
              <Zap className="industries-we-serve-card-icon" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Power Generation
            </h3>
            <p className="text-slate-600">Utilities & Energy</p>
          </div>

          {/* Card 3  */}
          <div className="group industries-we-serve-card">
            <div className="industries-we-serve-card-text">
              <Factory className="industries-we-serve-card-icon" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Manufacturing
            </h3>
            <p className="text-slate-600">Process Industries</p>
          </div>

          {/* Card 4 */}
          <div className="group industries-we-serve-card">
            <div className="industries-we-serve-card-text">
              <FlaskConical className="industries-we-serve-card-icon" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Chemical</h3>
            <p className="text-slate-600">Processing & Storage</p>
          </div>

        </div>
      </div>
    </section>
  );
}
