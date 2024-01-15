import './App.css';
import AdminLayout from './Pages/AdminLayout/AdminLayout';
import LoginPage from './Pages/Login-Signup/LoginPage';
import Product from "./Pages/Product/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <Router>
        <Routes>
          <Route path="/" element={<AdminLayout/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
   </Router>
  );
}

export default App;
  