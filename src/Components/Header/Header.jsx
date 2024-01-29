// components/Header.js
import React from "react";

const Header = () => {
  return (
      <div className="flex items-center h-screen justify-center w-auto text-white bg-blue-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Recommender App
          </h1>
          <p className="text-lg">
            Discover personalized recommendations just for you.
          </p>
        </div>
      </div>
  );
};

export default Header;
