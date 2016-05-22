import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCard from '../side/player_card'

class Player extends Component {
  render() {
    return (
      <div className="col-container player-container">
        <PlayerCard />
        <div className="content col player-content">
        </div>
      </div>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop

}

// export default connect(null, {})(Navbar)

export default Player