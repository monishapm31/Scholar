import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sc2 from "../assets/sc2.jpg"; // Local image

const Homepage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">Scholar Sphere</h1>
        <div>
          <button
            onClick={() => setShowLoginModal(true)}
            className="text-gray-700 hover:underline mr-4"
          >
            Log in
          </button>
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Discover scientific knowledge and stay connected to the world of research
          </h2>
          <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded">
            Join
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={sc2} alt="Research" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Login Modal */}
{showLoginModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 backdrop-blur-sm">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-300">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome Back!
      </h3>
      <p className="text-gray-600 text-center mb-4">
        Select your role to continue
      </p>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/login?role=student")}
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          🎓 Login as Student
        </button>
        <button
          onClick={() => navigate("/login?role=expert")}
          className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          🏅 Login as Expert
        </button>
      </div>
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-600 font-semibold cursor-pointer hover:underline"
        >
          Sign up here
        </span>
      </p>
    </div>
  </div>
)}


    </div>
  );
};

export default Homepage;
