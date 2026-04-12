import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./FinalPackage.scss";

const FinalPackage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // No data
  if (!state) {
    return (
      <section className="final-package">
        <p className="empty">No booking data found</p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Go Home
        </button>
      </section>
    );
  }

  const { vehicle, pkg, packageName = "Tour Package" } = state;

  const phoneNumber = "919361702846";

  const message = `Hello Mahimaicabs & Tours 👋

Package: ${packageName}
Vehicle: ${vehicle?.model}
Seating: ${vehicle?.seating}
AC: ${vehicle?.ac ? "Yes" : "No"}

Days: ${pkg?.days}
KM Limit: ${pkg?.km}
Price: ₹${pkg?.price}

Please confirm availability.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="final-package">

      <div className="container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2>Confirm Booking</h2>

        <div className="package-card">
          <img src={vehicle?.image} alt={vehicle?.model} />

          <h3>{vehicle?.model}</h3>
          <p>Seating: {vehicle?.seating}</p>
          <p>AC: {vehicle?.ac ? "Yes" : "No"}</p>

          <hr />

          <p>Days: {pkg?.days}</p>
          <p>KM Limit: {pkg?.km}</p>

          <div className="price">₹{pkg?.price}</div>

          <h4>Extra Charges</h4>
          <p>Toll Gate Charges</p>
          <p>Parking Charges</p>
          <p>Hill Charges</p>
          <p>State Permit</p>

          <button
            className="whatsapp-btn"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <FaWhatsapp /> <span>Book Now</span>
          </button>

          <button className="home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalPackage;