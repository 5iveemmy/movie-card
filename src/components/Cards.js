import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";

import Card from "./Card";

const options = {
  method: "GET",
  url: "https://data-imdb1.p.rapidapi.com/movie/byGen/Drama/",
  headers: {
    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
    "x-rapidapi-key": "c64538c0e3msh7c9379f641df305p18061djsncb2135f14de5",
  },
};
function Cards() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(async (response) => {
        const data = response.data["Movies Drama"];
        // take the first 24 movies
        const myData = data.splice(0, 24);
        const moviesList = [];

        // fetch for every movie
        // by looping over them and pushing the result into moviesList
        for (let i of myData) {
          options.url =
            "https://data-imdb1.p.rapidapi.com/movie/id/" + i.imdb_id + "/";
          let res = await axios.request(options);
          moviesList.push(res.data[i.title]);
        }
        // update state
        setMovies(moviesList);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="cards">
      <div className="cards-wrapper">
        {isLoaded ? (
          movies.map((movie) => (
            <Card
              src={movie.image_url}
              title={movie.title}
              year={movie.year}
              key={movie.imdb_id}
            />
          ))
        ) : (
          <p> loading ....</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
