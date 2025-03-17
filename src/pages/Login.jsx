import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    if (role) {
      setLoginData((prev) => ({ ...prev, role }));
    }
  }, [location]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password &&
        user.role === loginData.role
    );

    if (!foundUser) {
      setError("Invalid email, password, or role.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login as {loginData.role}</h2>
        {error && <p className="text-red-500">{error}</p>}

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />

        <label className="block mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          New to Scholar Sphere?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
          
        </p>
      </form>
    </div>
  );
};

export default Login;
