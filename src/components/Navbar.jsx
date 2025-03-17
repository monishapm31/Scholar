import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Scholar Sphere</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/resources" className="hover:underline">Resources</Link>
        {/* Profile Icon instead of "Profile" text */}
        <button onClick={toggleSidebar} className="text-2xl">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
