"use client"
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/nav'
import { useGlobalContext } from '@/context/store';

const Page = () => {
   const{setDarkMode,darkMode}=useGlobalContext();
  return (
    <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Header/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default Page