import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from "./components/Upload"
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      
      <nav id="navbar">
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", width: "90vw", gap: "75px" }}>
          <Link to="/" className="navbar-title" id="ee" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <div>FORMaiT</div>
          </Link>
          <div style={{  }}>
            <div style={{ display: "flex", gap: "50px" }}>
              <NavLink to="/" className={"navbar-text"}>Home</NavLink>
              <NavLink to="/convert" className={"navbar-text"}>Convert</NavLink>
              <NavLink to="/login" className={"navbar-text"}>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
