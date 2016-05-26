import React, { Component } from 'react'
import { connect } from 'react-redux'
//TODO: change these to the appropriate side component and action
import TeamMenu from '../side/team_menu'
//import { fetchTeamRankings } from '../../actions'

class ConferenceDash extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //TODO: think about any calls you may want to make
    //this.props.fetchTeamRankings()
  }

  render() {
    return (
      <div className="col-container team-container">
        <TeamMenu />
        <div className="content col team-content">
          Testing ConferenceDash. This should have columns for team standings on the left main
          part of the content box and a league leader container on the right
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  //TODO: think about what you want to do here
}

export default ConferenceDash