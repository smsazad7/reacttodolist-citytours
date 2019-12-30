import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
          const { handleInput, handleSubmit, item, editItem } = this.props;
    return (
      <section>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add todo itrem"
                onChange={handleInput}
                value={item}
              />
            </div>
            <button
            disabled={item?false:true}
              className={
                editItem
                  ? "btn btn-block btn-success text-capitalize my-3"
                  : "btn btn-block btn-primary text-capitalize my-3"
              }
            >
              {editItem?"edit item":"add item"}
            </button>
          </form>
        </div>
      </section>
    );
  }
}
