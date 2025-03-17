import { FaUserCircle, FaEdit, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ user, isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/"); // Redirect to login page
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-200 w-64 p-5 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-xl">✖</button>

      <div className="text-center mb-6 mt-8">
        <FaUserCircle className="text-6xl mx-auto text-gray-600" />
        {user ? (
          <>
            <h3 className="text-xl font-semibold mt-2">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600 font-semibold">Role: {user.role}</p>
            {user.role === "expert" && <p className="text-gray-600 font-semibold">Expert in: {user.subject}</p>}
          </>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>

      {/* Sidebar Menu Options */}
      <ul className="space-y-4">
        <li>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-600">
            <FaEdit /> <span>Edit Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center space-x-2 hover:text-blue-600">
            <FaCog /> <span>Settings</span>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="flex items-center space-x-2 hover:text-red-600">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
