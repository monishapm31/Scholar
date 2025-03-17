import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar user={user} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6">
          <h2 className="text-2xl font-bold">Welcome, {user?.name}!</h2>
          <p><strong>Role:</strong> {user?.role}</p>
          {user?.role === "expert" && <p><strong>Expert in:</strong> {user?.subject}</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
