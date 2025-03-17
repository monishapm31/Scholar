import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
