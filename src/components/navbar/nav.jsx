import React from 'react';
import Image from 'next/image';
import mlogo from '../../../public/mlogo.png';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={mlogo} width={30} height={30} alt="Logo" />
          <h1 className="text-xl font-semibold ml-2">Recommender App</h1>
        </div>
      </div>
      <ul className="space-x-4 flex items-center">
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Learning</li>
        <li className="cursor-pointer">Job post</li>
      </ul>
    </nav>
  );
}
