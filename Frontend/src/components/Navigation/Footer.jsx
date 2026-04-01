import React from "react";
import FadeInSection from "../Animation/FadeInSection.jsx";
export default function Footer() {
  return (
    <FadeInSection>
    <footer className="w-full bg-gradient-to-r from-[#0C1528] via-[#0B1730] to-[#0A1C3A] text-white px-6 py-16">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-20 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">AERP Engineering</h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Setting the standard for asset performance optimization and integrity assurance since our founding.
          </p>
        </div>
        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">SOLUTIONS</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li className="hover:text-emerald-500 cursor-pointer">AssetHealth360</li>
            <li className="hover:text-emerald-500 cursor-pointer">RCA 360</li>
            <li className="hover:text-emerald-500 cursor-pointer">Professional Training</li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li className="hover:text-emerald-500 cursor-pointer">About Us</li>
            <li className="hover:text-emerald-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">CONNECT</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li className="hover:text-emerald-500 cursor-pointer">
              Grand Prairie, Texas
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              info@aerpengineering.com
            </li>
          </ul>
        </div>

      </div>

      <div className="w-full h-px bg-white/10 my-12"></div>

      <p className="text-center text-xs text-white/50">
        © 2026 AERP Engineering. All rights reserved.
      </p>
    </footer>
    </FadeInSection>
  );
}
