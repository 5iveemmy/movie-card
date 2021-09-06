import React from "react";
import { BsSearch, MdPlaylistPlay, FiHeart, IoMdPhotos } from "react-icons/all";
import "./Platform.css";
import axios from "axios";

function Platform() {
  // const options = {
  //   method: "GET",
  //   url: "https://data-imdb1.p.rapidapi.com/genres/",
  //   headers: {
  //     "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
  //     "x-rapidapi-key": "c64538c0e3msh7c9379f641df305p18061djsncb2135f14de5",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // console.log(options);

  return (
    <div className="platform">
      <div className="platform-wrap">
        <div className="for-search">
          <BsSearch className="icon" />
          <input
            type="text"
            className="the-input"
            placeholder="Search movies, hit album"
          />
        </div>
        <div className="for-icons">
          <FiHeart />
          <MdPlaylistPlay />
          <IoMdPhotos />
        </div>
      </div>
    </div>
  );
}

export default Platform;
