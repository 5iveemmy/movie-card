import React from "react";
import "./Sidebar.css";
import circle from "../images/01.jpg";
import { Link } from "react-router-dom";
import {
  RiCompassDiscoverLine,
  MdPlaylistPlay,
  BiMovie,
  FiMusic,
  IoMdPhotos,
  FiMonitor,
  IoMdTime,
  FiHeart,
  FiSettings,
  RiLayoutGridFill,
  CgLogOut,
} from "react-icons/all";

function sideBar() {
  return (
    <nav className="side-nav">
      <div className="first-head">
        <img src={circle} alt="man in circle" />
        <h1>5ive Emmy</h1>
      </div>
      <div className="first-section">
        <ul className="the-list">
          <li>
            <Link className="the-links">
              {" "}
              <span>
                <RiCompassDiscoverLine />
              </span>
              Discover
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <MdPlaylistPlay />
              </span>
              Playlist
            </Link>
          </li>
          <li>
            <Link className="the-links">
              {" "}
              <span>
                <BiMovie />
              </span>
              Movies
            </Link>
          </li>
          <li>
            <Link className="the-links">
              {" "}
              <span>
                <FiMusic />
              </span>
              Music
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <IoMdPhotos />
              </span>
              Photos
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <FiMonitor />
              </span>
              TV Show
            </Link>
          </li>
        </ul>
      </div>
      <div className="second-section">
        <ul className="the-list">
          <li>
            <Link className="the-links">
              <span>
                <FiMonitor />
              </span>
              Channel
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <IoMdTime />
              </span>
              Watch later
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <FiHeart />
              </span>
              Recommended
            </Link>
          </li>
        </ul>
      </div>
      <div className="third-section">
        <ul className="the-list">
          <li>
            <Link className="the-links">
              <span>
                <FiSettings />
              </span>
              Settings
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <RiLayoutGridFill />
              </span>
              Layout
            </Link>
          </li>
          <li>
            <Link className="the-links">
              <span>
                <CgLogOut />
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default sideBar;
