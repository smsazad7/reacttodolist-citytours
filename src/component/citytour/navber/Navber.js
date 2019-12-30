import React, { Component } from "react";
import "./navber.css";

export default class Navber extends Component {
 
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <a className="navbar-brand text-white logo text-capitalize" href="#">
          <i className="fab fa-asymmetrik"/>
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
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto ">
            <li className="nav-item ">
              <a
                href="/"
                className="nav-link text-white text-capitalize ml-4 active"
              >
                home <i className="fas fa-home" />
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-4">
                about us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-4">
                contact us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white text-capitalize ml-4">
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
