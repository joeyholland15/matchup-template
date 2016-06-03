import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamMenu from '../side/team_menu'
import conferenceList from '../../helpers/conference_listings'
import _ from 'underscore'

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
          {conferenceList[this.props.activeConference]['west'].map((team, i) => {
            return <div key={i} team={team}>{team}</div>
          })}
          {conferenceList[this.props.activeConference]['east'].map((team, i) => {
            return <div key={i} team={team}>{team}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeConference: state.activeConference
  }
}

export default connect(
  mapStateToProps
)(ConferenceDash)