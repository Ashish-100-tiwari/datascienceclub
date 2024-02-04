import { useGlobalContext } from '@/context/store';
import React from 'react'

const Header = () => {
  const{darkMode}=useGlobalContext();
  return (
    <div className={`flex items-center h-screen  justify-center w-auto ${darkMode?"bg-gray-900 text-white" : "bg-slate-100 text-gray-800"}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Data Science Club
          </h1>
          <p className="text-lg">
            Learning Platform For Future Scientist.
          </p>
        </div>
      </div>
  )
}

export default Header;