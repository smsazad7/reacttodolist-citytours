import React, { Component } from "react";
import "./tour.css";

export default class Tour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, name, img, city, info } = this.props.tour;
    const { handleRemove } = this.props;
    return (
      <section>
        <div className="col-md-12 col-lg-3 mx-auto  mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="new-top">
              <img src={img} className="card-img-top" alt="img" />
              <span className="close-btn" onClick={() => handleRemove(id)}>
                <i className="fas fa-window-close" />
              </span>
            </div>
            <div className="card-body">
              <h3 className="card-title">{city}</h3>
              <h5 className="text-capitalize">{name}</h5>
              <h6 className="info text-capitalize mt-2 mb-3">
                info
                <span className="down mx-1" onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down" />
                </span>
              </h6>
              {this.state.showInfo && <p className="card-text">{info}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
