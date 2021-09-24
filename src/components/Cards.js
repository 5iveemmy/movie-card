import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "./Card";

function Cards() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "api_key=61dab464da90e05f4f4c3a6362670387";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="cards">
      <div className="cards-wrapper">
        {movies.length > 0 &&
          movies.map((movie) => <Card key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Cards;
