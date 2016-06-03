import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'

export default class ConferenceMenu extends Component {
  //a click to a conference menu component should dispatch some sort of action to update the 
  //current selected conference or available teams. Need this in the state somewhere. 
  render () {
    return (
      <aside className="team-list col">
        <div className="side-col">
          <Link to='/conference'><div className="side-row" id="sec"></div></Link>
          <Link to='/conference'><div className="side-row" id="pac"></div></Link>
          <Link to='/conference'><div className="side-row" id="big12"></div></Link>
          <Link to='/conference'><div className="side-row" id="b1g"></div></Link>
          <Link to='/conference'><div className="side-row" id="acc"></div></Link>
        </div>{/*}
        */}<div className="side-col">
          <Link to='/conference'><div className="side-row" id="aac"></div></Link>
          <Link to='/conference'><div className="side-row" id="cusa"></div></Link>
          <Link to='/conference'><div className="side-row" id="mac"></div></Link>
          <Link to='/conference'><div className="side-row" id="mwc"></div></Link>
          <Link to='/conference'><div className="side-row" id="nd"></div></Link>
        </div>
      </aside>
    )
  }
}