import React, { Component } from 'react'
import Navber from './component/citytour/navber/Navber'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <section>
        <Navber/>
        <h1>Hello Form React</h1>
      </section>
    )
  }
}

