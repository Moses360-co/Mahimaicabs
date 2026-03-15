import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";
import "./SelectDays.css";

const SelectDays = () => {
  const { id, vehicleId } = useParams();
  const navigate = useNavigate();

  const packageData = tourPackages.find(p => p.id === id);
  const vehicle = packageData?.vehicles.find(
    v => v.id === Number(vehicleId)
  );

  if (!vehicle) return <p>Vehicle not found</p>;

  return (
    <section className="select-days">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{vehicle.model}</h2>

      {vehicle.pricing.map(pkg => (
        <div className="day-card" key={pkg.id}>
          <h3>{pkg.days}</h3>
         
          

          <button
            onClick={() =>
              navigate("/final-package", {
                state: { vehicle, pkg }
              })
            }
          >
            Select
          </button>
        </div>
      ))}
    </section>
  );
};

export default SelectDays;
