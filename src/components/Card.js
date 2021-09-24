import React from "react";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Card = ({ title, poster_path, overview, release_date }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={IMG_URL + poster_path} alt="movie" />
      </div>
      <h2>{title}</h2>
      {/* <p>{overview}</p> */}
      <span>{release_date}</span>
    </div>
  );
};

export default Card;
