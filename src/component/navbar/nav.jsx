import React from 'react'
import Image from "next/image";
import mlogo from "../../../public/mlogo.png"
export default function Nav(){
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-5 bg-gray-900 text-white">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={mlogo} width={30} height={30} alt="Logo" />
          <h1 className="text-xl font-semibold ml-2">Recommender App</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Navigation Options for Larger Screens */}
        <ul className="hidden sm:flex space-x-4">
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Learning</li>
          <li className="cursor-pointer">Job post</li>
        </ul>
      </div>
    </nav>
  )
}
