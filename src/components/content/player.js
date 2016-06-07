import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCard from '../side/player_card'

class Player extends Component {
  render() {
    console.log('PLAYER PROPS', this.props)
    return (
      <div className="col-container player-container">
        <PlayerCard />
        <div className="content col player-content">
          {this.props.activePlayer.name}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activePlayer: state.activePlayer
  }
}

export default connect(
  mapStateToProps
)(Player)