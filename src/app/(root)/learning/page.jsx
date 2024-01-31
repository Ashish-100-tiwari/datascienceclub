"use client"
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/nav'
import React, { useState } from 'react'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Header/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default Page