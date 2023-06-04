import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import ActorDetail from "./components/ActorDetail";
import StarshipDetail from "./components/StarshipDetail";
import PlanetDetail from "./components/PlanetDetail";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Search />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/actor/:id" element={<ActorDetail />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
