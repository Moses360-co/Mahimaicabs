import React from "react";
import "./Services.css";

const Services = () => {
  const whatsappNumber = "919361702846";

  const message = "Hello, I want to book a room. Please share the details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="services-page">
      <div className="service-card">
        

        <div className="service-details">
          <h2>Room Booking</h2>

          <p>
            Comfortable rooms available for tourists. Book your stay easily
            with us and enjoy a pleasant travel experience.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;