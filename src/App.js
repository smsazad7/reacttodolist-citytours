import React, { Component } from 'react'
import Navber from './component/citytour/navber/Navber'
import 'bootstrap/dist/css/bootstrap.min.css'
import TourList from './component/citytour/tours/TourList'
import Todomin from './component/todolist/Todomin'


export default class App extends Component {
  render() {
    return (
      <section>
        <Navber/>
        <TourList/>
        <Todomin/>
      </section>
    )
  }
}

