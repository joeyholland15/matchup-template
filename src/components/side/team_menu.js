import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'

export default class TeamMenu extends Component {
  render () {
    return (
      <aside className="team-list col">
        <div className="side-col">
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
        </div>{/*}
        */}<div className="side-col">
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
          <div className="side-row"></div>
        </div>
      </aside>
    )
  }
}