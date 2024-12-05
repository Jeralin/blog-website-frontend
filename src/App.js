import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserLogin from "./Components/Users/UserLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Navbar from "./Navbar/Navbar";
import Feature from "./Components/Feature/Feature";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/admin_dashboard" element={[<Navbar />,<AdminDashboard />]} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/feature" element={[<Navbar />,<Feature />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
