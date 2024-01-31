"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/nav';
import Footer from '../footer/footer';
import Header from '../header/header';


const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainPage;