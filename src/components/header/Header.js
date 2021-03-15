import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background:"transparent"}}>
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
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
          <button className="btn btn-info my-2 my-sm-0 ml-2">
            login
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
