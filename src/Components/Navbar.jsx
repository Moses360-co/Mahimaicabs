import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  MdHome,
  MdAttachMoney,
  MdMiscellaneousServices,
  MdCall
} from "react-icons/md";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.scss";
import LogoImage from "./logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={LogoImage} alt="Mahimai Cabs" className="logo" />
          <span className="logo-text">Mahimai Cabs & Tours</span>
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>
            <MdHome /> Home
          </Link>
        </li>

        <li className={isActive("/tariff") ? "active" : ""}>
          <Link to="/tariff" onClick={closeMenu}>
            <MdAttachMoney /> Tariff
          </Link>
        </li>

        <li className={isActive("/services") ? "active" : ""}>
          <Link to="/services" onClick={closeMenu}>
            <MdMiscellaneousServices /> Services
          </Link>
        </li>

        <li className={isActive("/contact") ? "active" : ""}>
          <Link to="/contact" onClick={closeMenu}>
            <MdCall /> Contact
          </Link>
        </li>

      </ul>

      {/* MENU ICON */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;