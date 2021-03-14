import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background:"transparent"}}>
      <a className="navbar-brand" href="#">
        <h4>Tech Blog Site</h4>
      </a>
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
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ReactJS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              NodeJS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Javascript
            </a>
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
