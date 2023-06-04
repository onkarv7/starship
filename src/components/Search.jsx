// components/Search.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResultClick = (result) => {
    const { category, id } = result;
    navigate(`/${category}/${id}`);
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="button" onClick={handleSearch} placeholder="Search...">
        Search
      </button>
      {searchResults && searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.url} onClick={() => handleResultClick(result)}>
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
