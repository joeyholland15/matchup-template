import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class PlayerMenu extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="player-menu-container">
        <div className="player-menu-col">
          <Link to='/player/stats'><div className="player-menu-row menu-left">Stats</div></Link>
          <Link to='/player/logs'><div className="player-menu-row menu-left">Logs</div></Link>
          <Link to='/player/notes'><div className="player-menu-row menu-left">Notes</div></Link>
        </div>{/*
        */}<div className="player-menu-col">
          <Link to='/player/advanced'><div className="player-menu-row menu-right">Advanced</div></Link>
          <Link to='/player/highlights'><div className="player-menu-row menu-right">Highlights</div></Link>
          <Link to='/player/archive'><div className="player-menu-row menu-right">Archive</div></Link>
        </div>
      </div>
    )
  }
}

export default PlayerMenu