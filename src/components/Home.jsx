import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.episode_id}>
            <Link to={`/movie/${movie.episode_id}`}>
              {movie.title}

              {/* {movie.opening_crawl} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

// const MovieList = ({ movies }) => {
//   return (
//     <div className="container">
//       <h1>Star Wars Movies</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.episode_id}>
//             <Link to={`/movie/${movie.episode_id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// components/Home.js
