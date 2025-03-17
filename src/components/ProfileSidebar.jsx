
import React, { useState, useEffect } from "react";
import { FaUserCircle, FaTimes, FaSignOutAlt, FaCamera, FaEdit, FaSave } from "react-icons/fa";

const ProfileSidebar = ({ user = {}, setUser, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setEditedUser(savedUser);
      setUser(savedUser);
    }
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...editedUser, profilePicture: reader.result };
        setEditedUser(updatedUser);
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser)); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to save profile changes
  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem("user", JSON.stringify(editedUser)); // Save to localStorage
    setIsEditing(false);
  };

  return (
    <>
      {/* Profile Icon to Open Sidebar */}
      <button onClick={() => setIsOpen(true)} className="text-white text-3xl">
        <FaUserCircle />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-gray-800 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Profile</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Profile Picture & Upload */}
        <div className="flex flex-col items-center mt-4 relative">
          <img
            src={editedUser?.profilePicture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white shadow-lg"
          />
          
          {/* Upload Icon */}
          <label htmlFor="profile-upload" className="absolute bottom-0 right-5 bg-blue-500 p-2 rounded-full cursor-pointer">
            <FaCamera className="text-white text-xl" />
          </label>
          <input
            type="file"
            id="profile-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {/* Profile Info (Editable) */}
        <div className="p-4 space-y-3 text-sm">
          <div>
            <label className="block text-gray-300">Name:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name || ""}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-gray-300">Email:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email || ""}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-gray-300">Phone:</label>
            <input
              type="text"
              name="phone"
              value={editedUser.phone || ""}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              disabled={!isEditing}
            />
          </div>

          {/* If user is an expert, show expertise field */}
          {editedUser.role === "expert" && (
            <div>
              <label className="block text-gray-300">Expertise:</label>
              <input
                type="text"
                name="expertise"
                value={editedUser.expertise || ""}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
                disabled={!isEditing}
              />
            </div>
          )}

          {/* Edit and Save Button */}
          {isEditing ? (
            <button
              onClick={handleSave}
              className="w-full mt-4 bg-green-500 py-2 rounded flex items-center justify-center"
            >
              <FaSave className="mr-2" /> Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full mt-4 bg-blue-500 py-2 rounded flex items-center justify-center"
            >
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-500 py-2 rounded flex items-center justify-center"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
