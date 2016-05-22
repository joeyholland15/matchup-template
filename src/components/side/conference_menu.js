import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'

export default class ConferenceMenu extends Component {
  render () {
    return (
      <aside className="team-list col">
        <div className="side-col">
          <Link to='/conferences/sec'><div className="side-row" id="sec"></div></Link>
          <div className="side-row" id="pac"></div>
          <div className="side-row" id="big12"></div>
          <div className="side-row" id="b1g"></div>
          <div className="side-row" id="acc"></div>
        </div>{/*}
        */}<div className="side-col">
          <div className="side-row" id="aac"></div>
          <div className="side-row" id="cusa"></div>
          <div className="side-row" id="mac"></div>
          <div className="side-row" id="mwc"></div>
          <div className="side-row" id="nd"></div>
        </div>
      </aside>
    )
  }
}