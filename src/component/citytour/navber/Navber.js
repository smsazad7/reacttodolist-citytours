import React, { Component } from "react";
import "./navber.css";

export default class Navber extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <a className="navbar-brand text-white text-capitalize" href="#">
          <i className="fas fa-dove" /> কাদির সরকার বাড়ী
          <i className="fas fa-dove" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
           data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <a
                href="/"
                className="nav-link text-white text-capitalize ml-5 active"
              >
                home <i className="fas fa-home" />
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-5">
                about us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-5">
                contact us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-5">
                photo gallery
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn my-2 my-sm-0 text-white"
              type="submit"
              style={{ backgroundColor: "#C82333" }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
