import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchupMenu from '../side/matchup_menu'
import AutoComplete from './autocomplete'

class Matchup extends Component {
  render() {
    return (
      <div className="col-container">
        <MatchupMenu />
        <div className="content col">
          <div className="matchup-scoreboard">
            <div className="logo away-logo"></div>
            <div className="team away-team">
              <h2>Stanford</h2>
            </div>
            <div className="points away-points">
              <h1>36</h1>
            </div>
            <div className="versus">
              <h1>@</h1>
            </div>
            <div className="points away-points">
              <h1>38</h1>
            </div>
            <div className="team away-team">
              <h2>Oregon</h2>
            </div>
            <div className="logo home-logo"></div>
          </div>
          <div className="matchup-container">
            <div className="matchup away"></div>{/*}
            */}<div className="vs"></div>{/*}
            */}<div className="matchup home"></div>
          </div>
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

export default Matchup