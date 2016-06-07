import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchupMenu from '../side/matchup_menu'

class Matchup extends Component {
  render() {
    return (
      <div className="col-container">
        <MatchupMenu />
        <div className="content col">
          
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