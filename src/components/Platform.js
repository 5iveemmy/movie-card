import React from "react";
import { BsSearch, MdPlaylistPlay, FiHeart, IoMdPhotos } from "react-icons/all";
import "./Platform.css";

function Platform() {
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
