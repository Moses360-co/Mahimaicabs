import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";
import "./SelectVehicle.scss";

const SelectVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = tourPackages.find(p => p.id === id);
  if (!packageData) return <p>Package not found</p>;

  return (
    <section className="select-vehicle-page">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Select Vehicle</h2>

      {/* ✅ GRID ADDED */}
      <div className="vehicle-grid">
        {packageData.vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.model} />
            <h3>{vehicle.model}</h3>

            <button
              className="select-btn"
              onClick={() =>
                navigate(`/select-days/${id}/${vehicle.id}`)
              }
            >
              Select Vehicle
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectVehicle;