import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    bio: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile Updated!");
  };

  return (
    <div className="flex">
      {user && <Sidebar user={user} />}
      <div className="flex-1">
        <Navbar />
        <div className="p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <input type="text" name="name" value={user.name} onChange={handleChange} className="w-full p-2 border rounded mb-2" disabled />
          <input type="email" name="email" value={user.email} onChange={handleChange} className="w-full p-2 border rounded mb-2" disabled />
          <input type="text" name="phone" value={user.phone} onChange={handleChange} className="w-full p-2 border rounded mb-2" disabled />
          <input type="text" name="education" placeholder="Education" value={user.education} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="skills" placeholder="Skills" value={user.skills} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <textarea name="bio" placeholder="Bio" value={user.bio} onChange={handleChange} className="w-full p-2 border rounded mb-2"></textarea>
          <button onClick={handleSave} className="w-full bg-green-500 text-white p-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
