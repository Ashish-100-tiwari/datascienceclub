import { matplotlib, numpy, pandas, student } from '@/assets';
import Image from 'next/image';
import React from 'react';
import techData from '@/data/techData.json';
const Header = () => {
  return (
    <>
      {/* Space-themed Complex Animation */}
      <div className="relative w-full h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden flex justify-center items-center text-white">
        {/* Central Student Face */}
        <div className="relative w-48 h-48 rounded-full flex justify-center items-center z-10 overflow-hidden">
          <Image
            src={student}
            alt="Student"
            width={192} 
            height={192}
            className="rounded-full" /* Ensures the image is circular */
          />
        </div>

        {/* Orbiting Icons */}
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="orbit-container">
            <div className="orbit python"><h1>Python</h1></div>
            <div className="orbit numpy"><h1>Numpy</h1></div>
            <div className="orbit pandas"><h1>Pandas</h1></div>
            <div className="orbit matplotlib"><h1>Matplotlib</h1></div>
            <div className="orbit pyspark"><h1>PySpark</h1></div>
            <div className="orbit sql"><h1>SQL</h1></div>
            <div className="orbit ml"><h3>Machine Learning</h3></div>
            <div className="orbit ds"><h1>Data Science</h1></div>
            <div className="orbit r"><h1>R</h1></div>
            <div className="orbit tensorflow"><h1>TensorFlow</h1></div>
            <div className="orbit sklearn"><h1>Scikit-Learn</h1></div>
            <div className="orbit hadoop"><h1>Hadoop</h1></div>
            <div className="orbit airflow"><h1>Airflow</h1></div>
            <div className="orbit kafka"><h1>Kafka</h1></div>
            <div className="orbit spark"><h1>Spark</h1></div>
            <div className="orbit tableau"><h1>Tableau</h1></div>
          </div>
        </div>
      </div>

      {/* Static Section */}
      <div className="flex items-center h-[400px] justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Data Science Club</h1>
          <p className="text-lg">Learning Platform For Future Scientists.</p>
        </div>
      </div>
      
       <div className="flex justify-center bg-gray-900 pb-10 pt-10">
      <div>
        <h1 className="text-2xl font-bold text-center text-white mb-4">Technologies in Data Science</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techData.map((tech) => (
            <div key={tech.key} className="bg-gray-800 text-white p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-2">{tech.name}</h2>
              <p className="text-sm opacity-75">{tech.techcategory}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
