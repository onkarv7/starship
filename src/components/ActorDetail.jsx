// components/ActorDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ActorDetail() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => setActor(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  console.log("actor", actor);

  return (
    <div className="actor">
      <h1>{actor.name}</h1>
      <p>Gender: {actor.gender}</p>
      <p>Birth Year: {actor.birth_year}</p>
      <h2>Starships:</h2>
      <ul>
        {actor.starships.map((starshipUrl) => (
          <li key={starshipUrl}>
            <Link to={`/starship/${starshipUrl.split("/").slice(-2, -1)}`}>
              {starshipUrl.split("/").slice(-2, -1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetail;
