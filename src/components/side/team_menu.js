import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'
import { connect } from 'react-redux'
import conferenceList from '../../helpers/conference_listings'
import FilterTeamLink from '../containers/filter_team'

class TeamMenu extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <aside className="team-list col">
        <div className="side-col">
          {conferenceList[this.props.activeConference]['east'].map((team, i) => {
            return <FilterTeamLink key={i} team={team} />
          })}
        </div>
        <div className="side-col">
          {conferenceList[this.props.activeConference]['west'].map((team, i) => {
            return <FilterTeamLink key={i} team={team} />
          })}
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeConference: state.activeConference
  }
}

export default connect(
  mapStateToProps
)(TeamMenu)