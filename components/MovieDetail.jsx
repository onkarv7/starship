// components/MovieDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/films/");
      const matchingMovie = response.data.results.find(
        (movie) => movie.episode_id === parseInt(id)
      );
      setMovie(matchingMovie);
    } catch (error) {
      console.log(error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movieDetails">
      <h1>{movie.title}</h1>
      <p className="details">{movie.opening_crawl}</p>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.release_date}</p>
      <h2>Characters</h2>
      <ul>
        {movie.characters.map((characterUrl, index) => (
          <li key={index}>
            <Link to={`/actor/${characterUrl.split("/").slice(-2, -1)}`}>
              {characterUrl.split("/").slice(-2, -1)}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Planets</h2>
      <ul>
        {movie.planets.map((planetUrl, index) => (
          <li key={index}>
            <Link to={`/planet/${planetUrl.split("/").slice(-2, -1)}`}>
              {planetUrl.split("/").slice(-2, -1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
