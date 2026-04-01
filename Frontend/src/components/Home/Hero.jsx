import React from 'react'
import FadeInSection from "../Animation/FadeInSection.jsx";

export default function Hero() {
  return (
    <FadeInSection>
    <div className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <section className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
              Asset-Centric Solutions for Industrial Excellence
            </h1>

            <p className="mt-4 text-lg lg:text-2xl text-gray-200 leading-relaxed">
              AssetHealth <span className="align-super text-sm">360</span> delivers comprehensive asset integrity management across critical industries and applications
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-lg lg:text-xl font-semibold rounded-md transition">
              Explore Our Solutions
            </button>

            <button className="border border-gray-300 hover:border-white hover:bg-white/10 px-6 py-3 text-lg lg:text-xl font-semibold rounded-md transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
    </FadeInSection>
  )
}
