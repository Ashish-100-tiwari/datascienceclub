"use client"
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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