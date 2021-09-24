import React from "react";
import { BsSearch, MdPlaylistPlay, FiHeart, IoMdPhotos } from "react-icons/all";
import "./Platform.css";
// import axios from "axios";
import { Link } from "react-router-dom";

function Platform() {
  return (
    <div className="platform">
      <div className="platform-wrap">
        <form className="for-search">
          <Link>
            <BsSearch className="icon" />
          </Link>
          <input type="text" className="the-input" placeholder="Search" />
        </form>
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
