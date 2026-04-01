import React from "react";
import { Award, Lightbulb, MessageCircle } from "lucide-react";
import FadeInSection from "../Animation/FadeInSection.jsx";
export default function Principles() {
  return (
    <FadeInSection>
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Principles
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The foundation of everything we do
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <Award className="text-emerald-600 w-7 h-7" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Quality Assurance
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We prioritize quality assurance to ensure that every project meets
              the highest standards of excellence and reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <Lightbulb className="text-emerald-600 w-7 h-7" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Innovation and Creativity
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We foster innovation and creativity in our engineering solutions,
              pushing the boundaries of what is possible to deliver unique and
              cutting-edge products.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <MessageCircle className="text-emerald-600 w-7 h-7" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Collaboration and Communication
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We believe in open and effective collaboration with our clients,
              working closely together to understand their needs and deliver
              tailored engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
