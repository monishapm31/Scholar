import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-6">
        {/* Ensure user is loaded before displaying */}
        {user ? (
          <>
            <h2 className="text-2xl font-bold">Welcome, {user.name}!</h2>
            <p><strong>Role:</strong> {user.role}</p>
            {user.role === "expert" && <p><strong>Expert in:</strong> {user.expertise}</p>}
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
