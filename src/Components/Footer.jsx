import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section footer-about">
          <h3>Mahimai Cabs & Tours</h3>
          <p>Enjoy smooth, safe, and reliable journeys.</p>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact</h3>
          <p>Email: mahimaicabs.madurai@gmail.com</p>
          <p>Phone: +91 9361702846, +91 7639900413</p>
        </div>

        <div className="footer-section footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.google.co.in/maps/dir/9.9033205,78.14503/Mahimai+Cabs+%26+Tours,+17,+Iravadanallur,+Madurai,+Tamil+Nadu+625009/@9.9026092,78.1520401,20.25z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3b00c5004c949d4d:0x2b08f7e985aec4a2!2m2!1d78.1526375!2d9.9028422!3e0"
              aria-label="Location"
              target="_blank"
              rel="noopener noreferrer"
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