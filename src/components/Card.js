import React from "react";

const Card = ({ src, alt, title, year }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={src} alt={alt || "movie"} />
      </div>
      <p>{title}</p>
      <span>{year}</span>
    </div>
  );
};

export default Card;
