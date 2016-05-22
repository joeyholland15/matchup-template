import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConferenceMenu from '../side/conference_menu'

class Team extends Component {
  render() {
    return (
      <div className="col-container team-container">
        <ConferenceMenu />
        <div className="content col team-content">
          Maybe a list of selectable current top 25 as default?
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

export default Team