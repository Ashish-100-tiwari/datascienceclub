"use client"
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/nav'
import data from "../../../data/learning.json"
import React, { useState } from 'react'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <div className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-800"
      } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
        {data.map((item, index) => (
          <div key={index} className={`${
        darkMode ?"shadow-lg shadow-rose-800" : "shadow-lg shadow-gray-500"
      }  sm:w-auto sm:m-2 md:w-auto md:m-2 rounded-md flex text-center justify-center border border-rose-900 border-solid w-full lg:w-auto p-4 lg:p-16 lg:m-4`}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default Page;
