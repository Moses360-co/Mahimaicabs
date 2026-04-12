import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";
import "./SelectDays.scss";

const SelectDays = () => {
  const { id, vehicleId } = useParams();
  const navigate = useNavigate();

  const packageData = tourPackages.find(p => p.id === id);
  const vehicle = packageData?.vehicles.find(
    v => v.id === Number(vehicleId)
  );

  if (!vehicle) return <p>Vehicle not found</p>;

  return (
    <section className="select-days-page">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{vehicle.model}</h2>

      {/* ✅ GRID ADDED */}
      <div className="days-grid">
        {vehicle.pricing.map(pkg => (
          <div className="day-card" key={pkg.id}>
            <h3>{pkg.days}</h3>

            {/* Optional details */}
            {pkg.price && <p className="price">₹ {pkg.price}</p>}

            <button
              className="select-btn"
              onClick={() =>
                navigate("/final-package", {
                  state: { vehicle, pkg }
                })
              }
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectDays;