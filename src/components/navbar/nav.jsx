"use client"
import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex flex-col sm:flex-row items-center justify-between p-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-800"
      }`}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src="/mlogo.png" width={20} height={20} alt="Logo" />
          <h1 className="text-xl font-semibold ml-2">Recommender App</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button for Smaller Screens */}
        <button
          className={`w-6 h-6 cursor-pointer sm:hidden ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Responsive Navigation Menu for Smaller Screens */}
        {menuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col space-y-2 items-center">
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">Learning</li>
              <li className="cursor-pointer">Job post</li>
            </ul>
          </div>
        )}

        {/* Navigation Options for Larger Screens */}
        <ul className="hidden sm:flex space-x-4">
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Learning</li>
          <li className="cursor-pointer">Job post</li>
        </ul>

        {/* Dark Mode Toggle */}
        <div
          className={`w-6 h-6 cursor-pointer ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
