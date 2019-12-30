import React, { Component } from "react";
import Todoinput from "./Todoinput";
import TodoList from "./TodoList";
import uuid from "uuid";

export default class Todomin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
  }
  handleInput = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updetItems = [...this.state.items, newItem];
    this.setState({
      items: updetItems,
      id: uuid(),
      item: "",
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItem
    });
  };
  handleEdit = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const findItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItem,
      item: findItem.title,
      id: id,
      editItem: true
    });
  };

  render() {
    return (
      <section>
        <div className="containr">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo inpur</h3>
              <Todoinput
                item={this.state.item}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
