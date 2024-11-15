import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/admin_login' element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
