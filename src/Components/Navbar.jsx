import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome,MdAttachMoney,MdMiscellaneousServices,MdCall } from "react-icons/md";
import "./Navbar.css";
import LogoImage from "./logo.png";
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={LogoImage} alt="Logo" className="logo" />
          <h1>Mahimai Cabs & Tours</h1>
        </Link>
      </div>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}><MdHome /> Home</Link>
        </li>
        <li>
          <Link to="/tariff" onClick={() => setMenuOpen(false)}><MdAttachMoney /> Tariff</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}><MdMiscellaneousServices /> Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}><MdCall /> Contact</Link>
        </li>
      </ul>

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
