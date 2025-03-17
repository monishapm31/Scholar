import React, { useState } from "react";

const ProfilePage = () => {
  // Sample user data (can replace with API in future)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    role: "expert", // Change to 'user' for students
    expertise: "Machine Learning", // Only for experts
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  // Handle form changes
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="space-y-3">
        <p><strong>Name:</strong> {isEditing ? (
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        ) : user.name}</p>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Role:</strong> {user.role === "expert" ? "Expert" : "Student"}</p>

        {user.role === "expert" && (
          <p><strong>Expertise:</strong> {isEditing ? (
            <input
              type="text"
              name="expertise"
              value={updatedUser.expertise}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : user.expertise}</p>
        )}

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded mt-3"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
