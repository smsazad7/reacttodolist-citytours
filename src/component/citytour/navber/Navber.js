import React, { Component } from "react";
import "./navber.css";

export default class Navber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    };
  }
  handleClkic = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };
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
          onClick={this.handleClkic}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.state.showNav ? " " : "collapse navbar-collapse"}>
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
