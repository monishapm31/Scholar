import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student", // Default role
    subject: "", // For experts
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData)); // Save user data
    alert("Signup successful! Please log in.");
    navigate("/login"); // ✅ Redirect to login page after signup
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
          <select name="role" onChange={handleChange} className="w-full p-2 border rounded mb-2">
            <option value="student">Student</option>
            <option value="expert">Expert</option>
          </select>
          {formData.role === "expert" && (
            <input type="text" name="subject" placeholder="Expert in (e.g., AI, Physics)" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
          )}
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
