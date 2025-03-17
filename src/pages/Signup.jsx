import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student", // Default role
    subject: "", // Only for experts
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData)); // Save user data
    navigate("/dashboard"); // Redirect to dashboard after signup
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />

          {/* Role Selection */}
          <select name="role" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="student">Student</option>
            <option value="expert">Expert</option>
          </select>

          {/* Show subject field only for Experts */}
          {formData.role === "expert" && (
            <input type="text" name="subject" placeholder="Expert in (e.g., AI, Physics)" onChange={handleChange} className="w-full p-2 border rounded" required />
          )}

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
