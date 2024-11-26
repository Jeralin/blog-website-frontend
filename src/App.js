import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/Users/UserLogin';
// import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminNavbar from './Components/Admin/AdminNavbar';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/admin_login' element={<AdminLogin/>} />
       < Route path='/user_login' element={<UserLogin/>}/>
        <Route path='/admin-navbar' element={<AdminNavbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
