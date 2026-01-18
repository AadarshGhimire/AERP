import React from "react";
import { Shield,Zap,Users } from "lucide-react";
export default function WhyChooseUs() {
  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Reliable solutions backed by industry expertise and proven results.
          </p>
        </div>
        {/* Cards */}
        <div className="mt-16 grid gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-3 justify-items-center">
          {/* Card 1 */}
          <div className="why-choose-us-card">
            <Shield size={35} className="text-green-600"/>
            <h3 className="text">
              Reliability Engineering That Reduces Risk
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We apply structured reliability frameworks such as FMEA,
              criticality ranking, condition-based strategies, and predictive monitoring to ensure your assets operate with fewer surprises and higher availability. We engineer plant reliability into the system, not as a reaction to failures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-choose-us-card">
            <Zap size={35} className="text-green-600"/>
            <h3 className="text">
              Advanced Engineering Analysis & Failure Diagnostics
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Our team performs data-driven analysis in vibration analytics,oil data interpretation, thermography, and mechanical simulation to identify the true degradation mechanisms. We deliver quantified root-cause findings that enable permanent technical decisions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="why-choose-us-card">
            <Users size={35} className="text-green-600"/>
            <h3 className="text">
              Project Management With Measurable Execution
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We don't just recommend corrective actions we help implement
              them with project structure, governance, cost justification, and performance tracking. Actions become completed improvements, not parked ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
