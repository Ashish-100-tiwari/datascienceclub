import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-28">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center text-gray-800">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg text-white font-semibold mb-1">Recommender App</h2>
          <p className="text-sm text-white">
            Discover personalized recommendations just for you.
          </p>
        </div>

        <div className="flex space-x-4 lg:space-x-8">
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-white cursor-pointer" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-white cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Recommender App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
