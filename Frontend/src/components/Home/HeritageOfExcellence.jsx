import React from "react";
import { MoveRight, Factory, Globe, Shield, Award } from "lucide-react";

export default function HeritageOfExcellence() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Our Heritage of Excellence
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              AERP Engineering has set the standard for asset performance
              optimization and integrity assurance. Our dedication to
              innovation, customer-focused solutions, and industry leadership
              has earned us a strong reputation globally.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We incorporate decades of experience into the technologies and
              processes we develop, supporting critical industries including
              refining, petrochemical, power generation, and manufacturing.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
              Learn more about our legacy <MoveRight size={18} />
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="HeritageOfExcellence-card">
              <Factory className="text-green-600" size={40} />
              <h3 className="HeritageOfExcellence-card-text">
                Multi Domain
              </h3>
              <p className="text-slate-600">
                Functional and Technical Expertise
              </p>
            </div>

            {/* Card 2 */}
            <div className="HeritageOfExcellence-card">
              <Globe className="text-green-600" size={40} />
              <h3 className="HeritageOfExcellence-card-text">
                Global
              </h3>
              <p className="text-slate-600">
                Reach & Support
              </p>
            </div>

            {/* Card 3 */}
            <div className="HeritageOfExcellence-card">
              <Shield className="text-green-600" size={40} />
              <h3 className="HeritageOfExcellence-card-text">
                24/7
              </h3>
              <p className="text-slate-600">
                Support and Turnaround
              </p>
            </div>

            {/* Card 4 */}
            <div className="HeritageOfExcellence-card">
              <Award className="text-green-600" size={40} />
              <h3 className="HeritageOfExcellence-card-text">
                Professional
              </h3>
              <p className="text-slate-600">
                Certified Engineers
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
