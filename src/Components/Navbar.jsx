import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 z-30 bg-[#0A0A0A]/90 backdrop-blur-sm shadow-md py-3 px-4 md:px-8 flex items-center justify-between border-b border-gray-800">
    <div className="flex items-center gap-2">
      <span className="text-cyan-400 font-bold text-xl tracking-tight">CyberGuard</span>
    </div>
    <div className="flex gap-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-gray-200 hover:text-cyan-400 transition-colors font-medium px-2 py-1 rounded ${isActive ? 'text-cyan-400 underline underline-offset-4' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-gray-200 hover:text-cyan-400 transition-colors font-medium px-2 py-1 rounded ${isActive ? 'text-cyan-400 underline underline-offset-4' : ''}`
        }
      >
        Dashboard
      </NavLink>
    </div>
  </nav>
);

export default Navbar; 