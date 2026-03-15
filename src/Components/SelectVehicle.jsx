import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";
import "./SelectVehicle.css";
const SelectVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = tourPackages.find(p => p.id === id);
  if (!packageData) return <p>Package not found</p>;

  return (
    <section className="select-vehicle">
      <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>

      <h2>Select Vehicle</h2>

      {packageData.vehicles.map(vehicle => (
        <div key={vehicle.id}>
          <img src={vehicle.image} alt={vehicle.model} />
          <h3>{vehicle.model}</h3>

          <button
            onClick={() =>
              navigate(`/select-days/${id}/${vehicle.id}`)
            }
          >
            Select
          </button>
        </div>
      ))}
    </section>
  );
};

export default SelectVehicle;
