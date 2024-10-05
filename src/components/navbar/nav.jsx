"use client";
import Image from "next/image";
import Link from "next/link";
import dsc from '../../assets/jpeg/dsc.jpg';
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-5 bg-gray-900 text-white border-b-2 border-rose-900">
      <div className="flex items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={dsc} width={60} height={60} alt="Logo" className="rounded-md" />
          </Link>
          <Link href={"/"}>
            <h1 className="text-xl font-semibold ml-2">Data Science Club</h1>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button for Smaller Screens */}
        <button
          className="w-6 h-6 cursor-pointer sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Responsive Navigation Menu for Smaller Screens */}
        {menuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col space-y-2 items-center">
              <Link href="/project">Project</Link>
              <Link href="/learning">Learning</Link>
              <Link href="/ainews">AI News</Link>
            </ul>
          </div>
        )}

        {/* Navigation Options for Larger Screens */}
        <ul className="hidden sm:flex space-x-4 ">
          <Link href="/project">Project</Link>
          <Link href="/learning">Learning</Link>
          <Link href="/ainews">Ai News</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
