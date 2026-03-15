import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tourPackages from "./moreDetailsData";
import "./MoreDetails.css";

const MoreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = tourPackages.find(p => p.id === id);
  if (!packageData) return <p>Package not found</p>;

  return (
    <section className="more-details">
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{packageData.title}</h1>
      <img src={packageData.heroImage} alt={packageData.title} />
      <p>{packageData.description}</p>
      

      <button onClick={() => navigate(`/select-vehicle/${id}`)}>
        Select Vehicle
      </button>

      <ul>
        {packageData.popularPlaces.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
};

export default MoreDetails;
