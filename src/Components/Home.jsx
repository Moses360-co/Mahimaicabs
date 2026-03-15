import React from "react";
import "./Home.css";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      {/* TITLE */}
      <h1 className="home-title">
        Welcome to Mahimaicabs & Tours
      </h1>

      {/* COMPANY IMAGE + DESCRIPTION */}
      <div className="company-banner">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Mahimaicabs & Tours"
        />

        <div className="company-overlay">
          <h2>Mahimaicabs & Tours</h2>
          <p>
            We provide comfortable cab services and customized tour packages
            across Tamil Nadu. Travel with safety, affordability, and
            unforgettable experiences.
          </p>
        </div>
      </div>

      {/* POPULAR PACKAGES */}
      <h2 className="section-title">Our Popular Packages</h2>

      <div className="package-list">
        {tourPackages.map((item) => (
          <div className="package-card" key={item.id}>
            <img src={item.heroImage} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button onClick={() => navigate(`/package/${item.id}`)}>
              More Details →
            </button>
          </div>
        ))}
      </div>

      {/* SCROLL TOP */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </section>
  );
};

export default Home;
