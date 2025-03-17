import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Signup = () => {
  const { role } = useParams(); // Get role from URL if available
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: role || "student", // Default to Student if not provided
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (role) {
      setUserData((prevData) => ({ ...prevData, role })); // Update role if passed via URL
    }
  }, [role]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === userData.email);

    if (userExists) {
      setError("User already exists. Please log in.");
      return;
    }

    // Save the new user
    const updatedUsers = [...existingUsers, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Set logged-in user
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}

        <label className="block mb-2">Name:</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />

        <label className="block mb-2">Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />

        <label className="block mb-2">Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />

        <label className="block mb-2">Role:</label>
        <select name="role" value={userData.role} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
          <option value="student">Student</option>
          <option value="expert">Expert</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
