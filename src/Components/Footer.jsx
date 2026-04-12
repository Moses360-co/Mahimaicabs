import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h3>Mahimai Cabs & Tours</h3>
          <p>Enjoy smooth, safe, and reliable journeys.</p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: mahimaicabs.madurai@gmail.com</p>
          <p>Phone: +91 9361702846</p>
          <p>Phone: +91 7639900413</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a
              href="https://www.google.co.in/maps"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CodeNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;