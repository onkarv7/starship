// // components/StarshipDetail.js
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// function StarshipDetail() {
//   const { id } = useParams();
//   const [starship, setStarship] = useState(null);
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/starships/${id}/`)
//       .then((response) => response.json())
//       .then((data) => {
//         setStarship(data);
//         fetch(data.films[0])
//           .then((response) => response.json())
//           .then((data) => setMovie(data.title))
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   if (!starship || !movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{starship.name}</h1>
//       <p>Model: {starship.model}</p>
//       <p>Manufacturer: {starship.manufacturer}</p>
//       <p>Movie: {movie}</p>
//       <Link to={`/movie/${starship.films[0].split("/").slice(-2, -1)}`}>
//         Back to Movie Detail
//       </Link>
//     </div>
//   );
// }

// export default StarshipDetail;

// components/StarshipDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function StarshipDetail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetchStarship();
  }, []);

  const fetchStarship = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/${id}/`
      );
      setStarship(response.data);

      const movieResponse = await axios.get(response.data.films[0]);
      setMovie(movieResponse.data.title);
    } catch (error) {
      console.log(error);
    }
  };

  if (!starship || !movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Movie: {movie}</p>
      <Link to={`/movie/${starship.films[0].split("/").slice(-2, -1)}`}>
        <button> Back to Movie Detail</button>
      </Link>
    </div>
  );
}

export default StarshipDetail;
