import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PlanetDetail() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetchPlanet();
  }, []);

  const fetchPlanet = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <Link to={`/movie/${planet.films[0].split("/").slice(-2, -1)}`}>
        <button> Back to Movie Detail</button>
      </Link>
    </div>
  );
}

export default PlanetDetail;
