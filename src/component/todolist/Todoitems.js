import React, { Component } from "react";

export default class Todoitems extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="icon">
          <span className="text-success mx-2" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="text-danger mx-2"onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
