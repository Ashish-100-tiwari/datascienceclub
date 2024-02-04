"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/nav';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useGlobalContext } from '@/context/store';


const MainPage = () => {
  const{setDarkMode,darkMode} =useGlobalContext();
  return (
      <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainPage;