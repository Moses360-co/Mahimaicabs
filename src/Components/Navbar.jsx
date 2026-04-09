import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  MdHome,
  MdAttachMoney,
  MdMiscellaneousServices,
  MdCall
} from "react-icons/md";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import LogoImage from "./logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-container">

        <Link to="/" className="logo-link" onClick={closeMenu}>

          <img
            src={LogoImage}
            alt="Mahimai Cabs"
            className="logo"
          />

          <span className="logo-text">
            Mahimai Cabs & Tours
          </span>

        </Link>

      </div>



      {/* NAV LINKS */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            <MdHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/tariff" onClick={closeMenu}>
            <MdAttachMoney /> Tariff
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>
            <MdMiscellaneousServices /> Services
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            <MdCall /> Contact
          </Link>
        </li>

      </ul>



      {/* MOBILE MENU ICON */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>



      {/* OVERLAY */}
      {menuOpen && (

        <div
          className="overlay"
          onClick={closeMenu}
        />

      )}

    </nav>

  );

};

export default Navbar;