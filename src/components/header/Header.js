import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
  const searchPosts = (event) => {
    console.log("searchString", searchString);
    window.location.assign(`/search?search=${searchString}`);
  };

  const [searchString, setSearchString] = useState();
  const [active, setActive] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "transparent" }}
    >
      <Link className="navbar-brand" to="/home">
        <h4>Tech Blog Site</h4>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setActive(!active)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${active && "menuOpen"}`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/reactjs">
              ReactJS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/nodejs">
              NodeJS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/javascript">
              Javascript
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/typescript">
              Typescript
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/database">
              Database
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/other">
              Other
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            required
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            className="btn btn-success my-2 my-sm-0"
            type="button"
            onClick={(e) => searchPosts(e)}
          >
            Search
          </button>
          {/*  */}
          <div className="dropdown" onClick={() => setShowProfileOptions(!showProfileOptions)}>
            <img className="customAvatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
            <div className={`dropdown-content ${showProfileOptions && "dropdown-content-active"}`}>
              <button className="btn btn-info my-2 my-sm-0 ml-2">login</button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
