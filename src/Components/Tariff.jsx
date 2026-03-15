import React from "react";
import "./Tariff.css";
import tariffData from "./tariffData";
import { FaRoad, FaUser, FaRupeeSign } from "react-icons/fa";

const Tariff = () => {
  const handleWhatsApp = (vehicleName) => {
    const phoneNumber = "919361702846";
    const message = `Hello, I want to book the ${vehicleName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="tariff-page">
      {tariffData.map((vehicle) => (
        <div className="tariff-card" key={vehicle.id}>
          
          <div className="vehicle-image">
            <img src={vehicle.image} alt={vehicle.vehicleName} />
            <h2>{vehicle.vehicleName}</h2>
          </div>

          <div className="tariff-section">
            <h3>ABOVE {vehicle.minKmLimit} KM /Per Day</h3>
            <div className="tariff-item">
              <FaRoad />
              <span>Per km – Rs.{vehicle.tariff.aboveKm.perKm}</span>
            </div>
            <div className="tariff-item">
              <FaUser />
              <span>{vehicle.seating} Seating</span>
            </div>
            <div className="tariff-item">
              <FaRupeeSign />
              <span>Driver Bata – Rs.{vehicle.tariff.aboveKm.driverBata}</span>
            </div>
          </div>

          <div className="tariff-section">
            <h3>BELOW {vehicle.minKmLimit} KM /Per Day</h3>
            <div className="tariff-item">
              <FaRupeeSign />
              <span>Day Rent – Rs.{vehicle.tariff.belowKm.dayRent}</span>
            </div>
            <div className="tariff-item">
              <FaRupeeSign />
              <span>Fuel Charges – Rs.{vehicle.tariff.belowKm.charges}</span>
            </div>
            <div className="tariff-item">
              <FaUser />
              <span>{vehicle.seating} Seating</span>
            </div>
          </div>

          <button
            className="book-btn"
            onClick={() => handleWhatsApp(vehicle.vehicleName)}
          >
            Book on WhatsApp
          </button>
        </div>
      ))}
    </section>
  );
};

export default Tariff;