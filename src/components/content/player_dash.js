import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerDashMenu from '../side/player_dash_menu'

class PlayerDash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-container team-container">
        <PlayerDashMenu />
        <div className="content col team-content">
          Player Dash. Think about what would go here. 
        </div>
      </div>
    )
  }
}

export default PlayerDash