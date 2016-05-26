import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConferenceMenu from '../side/conference_menu'
import { fetchTeamRankings } from '../../actions'

class Team extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //default call to fetchTeamRankings
    this.props.fetchTeamRankings()
  }

  render() {
    return (
      <div className="col-container team-container">
        <ConferenceMenu />
        <div className="content col team-content">
          {this.props.rankings.map((team, i) =>
            <div key={i} team={team}>{team.rank} {team.team}</div>
          )}
        </div>
      </div>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop
  return {
    rankings: state.rankings
  }
}

export default connect(mapStateToProps, {fetchTeamRankings})(Team)