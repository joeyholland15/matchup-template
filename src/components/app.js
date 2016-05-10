import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './nav/nav_bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}