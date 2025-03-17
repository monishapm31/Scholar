import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import scholarImage from '../assets/sc2.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Left Side: Image (Takes 1/2 Page) */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-200">
        <img src={scholarImage} alt="Scholar Sphere" className="w-full h-full object-cover" />
      </div>

      {/* Right Side: Content (Takes 1/2 Page) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome to Scholar Sphere</h2>
          
          <div className="space-y-10">
            {/* Student Card */}
            <Link to="/signup/student">
              <div className="flex items-center p-6 border border-gray-300 rounded-lg shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
                <FaUserGraduate size={32} className="text-blue-600" />
                <span className="ml-8 text-lg font-medium text-gray-700">Student</span>
              </div>
            </Link>

            {/* Expert Card */}
            <Link to="/signup/expert">
              <div className="flex items-center p-6 border border-gray-300 rounded-lg shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
                <FaChalkboardTeacher size={32} className="text-green-600" />
                <span className="ml-8 text-lg font-medium text-gray-700">Expert</span>
              </div>
            </Link>

            {/* Not a Student Card */}
            <Link to="/signup/other">
              <div className="flex items-center p-6 border border-gray-300 rounded-lg shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
                <FaUserAlt size={32} className="text-yellow-600" />
                <span className="ml-8 text-lg font-medium text-gray-700">Not a Student</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;