import React, { Component } from "react";

export default class Tour extends Component {
  render() {
    const { id, name, img, city, info } = this.props.tour;
    return (
      <section>
        <div className="col-12 col-lg-3 mx-auto  mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="img" />
            <span className="close-btn">
              <i className="fas fa-window-close" />
            </span>
            <div className="card-body">
              <h3 className="card-title">{city}</h3>
              <h4>{name}</h4>
              <h5 className="info">
                info
                <span>
                  <i className="fas fa-caret-square-down" />
                </span>
              </h5>
              <p className="card-text">{info}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
