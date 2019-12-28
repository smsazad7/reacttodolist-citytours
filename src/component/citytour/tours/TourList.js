import React, { Component } from "react";
import Tour from "./Tour";
import { tourData } from "./tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTour: tourData
    };
  }
  handleRemove = id => {
    const filteItems=this.state.newTour.filter(item=>item.id !==id)
    this.setState({
      newTour:filteItems
    })
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          {this.state.newTour.map(tour => (
            <Tour key={tour.id} tour={tour}handleRemove={this.handleRemove} />
          ))}
        </div>
      </div>
    );
  }
}
