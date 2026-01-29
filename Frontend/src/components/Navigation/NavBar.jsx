import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="lg:text-2xl text-xl font-bold text-green-700">
            AERP Engineering
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[20px] font-medium">

          <NavLink to="/" className="text-gray-700 hover:text-green-700 transition">
            Home
          </NavLink>

          <NavLink to="/about" className="text-gray-700 hover:text-green-700 transition">
            About
          </NavLink>

          {/* Services */}
          <div className="relative group">
            <NavLink
              to=""
              className="flex items-center gap-1 text-gray-700 hover:text-green-700 transition">
              Services 
              {/* <ChevronDown /> */}
            </NavLink>
            {/* <div className="absolute top-full mt-2 w-60 bg-slate-800 text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <NavLink to="/services" className="block px-4 py-3 hover:bg-slate-700">
                Asset Integrity Services
              </NavLink>
              <NavLink to="/services/asset-health" className="block px-4 py-3 hover:bg-slate-700">
                AssetHealth 360
              </NavLink>
              <NavLink to="/services/rca" className="block px-4 py-3 hover:bg-slate-700">
                RCA 360
              </NavLink>
              <NavLink to="/services/training" className="block px-4 py-3 hover:bg-slate-700">
                Professional Training
              </NavLink>
            </div> */}
          </div>

          {/* Resources */}
          <div className="relative group">
            <NavLink
              to="/resources"
              className="flex items-center gap-1 text-gray-700 hover:text-green-700 transition"
            >
              Resources
            </NavLink>
          </div>

          <NavLink to="/store" className="text-gray-700 hover:text-green-700 transition">
            Store
          </NavLink>

          <NavLink to="/contact" className="text-gray-700 hover:text-green-700 transition">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden block">
          {isMenuOpen ? (
            <X size={32} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu size={32} onClick={() => setIsMenuOpen(true)} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 lg:hidden">
            <NavLink to="/" className="text-gray-700">Home</NavLink>
            <NavLink to="/about" className="text-gray-700">About</NavLink>
            <NavLink to="/services" className="text-gray-700">Services</NavLink>
            <NavLink to="/resources" className="text-gray-700">Resources</NavLink>
            <NavLink to="/store" className="text-gray-700">Store</NavLink>
            <NavLink to="/contact" className="text-gray-700">Contact</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
