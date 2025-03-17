import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";

const Navbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    role: "expert", // Change to 'student' for students
    expertise: "Machine Learning", // Only for experts
    profilePicture: "", // Empty initially, will update on upload
  });

  // Function to handle logout
  const handleLogout = () => {
    alert("You have logged out!");
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Scholar Sphere</h1>
      <ProfileSidebar user={user} setUser={setUser} handleLogout={handleLogout} />
    </nav>
  );
};

export default Navbar;
