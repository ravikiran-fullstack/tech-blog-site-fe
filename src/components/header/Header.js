import React, { useState, useRef, useEffect, useContext } from "react";

import { UserAuthenticationContext } from "../../context/UserAuthenticationContext";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isUserLoggedIn, updateLogInStatus] = useContext(
    UserAuthenticationContext
  );

  // const updateLogInStatus = () => {
  //   setIsUserLoggedIn(!isUserLoggedIn);
  // };

  const searchPosts = (event) => {
    console.log("searchString", searchString);
    window.location.assign(`/search?search=${searchString}`);
  };

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [searchString, setSearchString] = useState();

  const [showProfileOptions, setShowProfileOptions] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        console.log(e);
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light menuContainer"
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
        onClick={() => setIsActive(!isActive)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        ref={dropdownRef}
        className={`navbar-collapse menu ${isActive ? "active" : "inactive"}`}
        id="navbarSupportedContent"
      >
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
          <button
            type="button"
            className="btn btn-info my-2 my-sm-0 ml-2"
            onClick={updateLogInStatus}
          >
            {isUserLoggedIn ? "Log Out" : "Login"}
          </button>
          {/*  */}
          {/* <div>
            <img className="customAvatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              <button className="btn btn-info my-2 my-sm-0 ml-2">login</button>
          </div> */}
        </form>
      </div>
    </nav>
  );
};

export default Header;
