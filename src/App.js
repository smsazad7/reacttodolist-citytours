import React, { Component } from 'react'
import Navber from './component/citytour/navber/Navber'
import 'bootstrap/dist/css/bootstrap.min.css'
import TourList from './component/citytour/tours/TourList'


export default class App extends Component {
  render() {
    return (
      <section>
        <Navber/>
        <TourList/>
      </section>
    )
  }
}

