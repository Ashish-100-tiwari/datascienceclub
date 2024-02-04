"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
// darkMode, setDarkMode
const GlobalContext = createContext({
    darkMode: false,
    setDarkMode: () => {},
});
 export const GlobalContextProvider = ({ children }) => {
 const [darkMode, setDarkMode] = useState(false);
  return (
    <GlobalContext.Provider value={{ darkMode,setDarkMode}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
