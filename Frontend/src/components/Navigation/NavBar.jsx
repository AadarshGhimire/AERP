import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="lg:text-2xl text-xl font-bold text-green-700">
            AERP Engineering
          </span>
        </div>
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[20px] font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-700"
                : "text-gray-700 hover:text-green-700 transition"
            }>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-green-700 transition">
            About
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/services"
              className="flex items-center gap-1 text-gray-700 hover:text-green-700 transition">
              Services
            </NavLink>
          </div>

          <NavLink
            to="/resources"
            className="text-gray-700 hover:text-green-700 transition">
            Resources
          </NavLink>

          <NavLink
            to="/store"
            className="text-gray-700 hover:text-green-700 transition">
            Store
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-green-700 transition">
            Contact
          </NavLink>
        </nav>
        <button className="lg:hidden block">
          {isMenuOpen ? (
            <X size={32} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu size={32} onClick={() => setIsMenuOpen(true)} />
          )}
        </button>
        {
          isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 lg:hidden mobile-menu">
              <NavLink
                to="/Home"
                className="text-gray-700 hover:text-green-700 transition">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-green-700 transition">
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-green-700 transition">
                Services
              </NavLink>
              <NavLink
                to="/resources"
                className="text-gray-700 hover:text-green-700 transition">
                Resources
              </NavLink>
              <NavLink
                to="/store"
                className="text-gray-700 hover:text-green-700 transition">
                Store
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-green-700 transition">
                Contact
              </NavLink>
            </div>
          ) 
        }
      </div>
    </header>
  );
}
