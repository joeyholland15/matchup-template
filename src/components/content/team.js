import React, { Component } from 'react'
import TeamMenu from '../side/team_menu'
import { connect } from 'react-redux'

class Team extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="col-container team-container">
        <TeamMenu />
        <div className="content col team-content">
          <div>{this.props.activeTeam}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeTeam: state.activeTeam
  }
}

export default connect(
  mapStateToProps
)(Team)


