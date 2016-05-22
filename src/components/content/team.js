import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConferenceMenu from '../side/conference_menu'
import { fetchTeamRankings } from '../../actions'

class Team extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTeamRankings()
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="col-container team-container">
        <ConferenceMenu />
        <div className="content col team-content">
          {this.props.teams.map((team, i) =>
            <div key={i} team={team}>{team.team}</div>
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
    teams: state.teams
  }
}

// export default connect(null, {})(Navbar)

export default connect(mapStateToProps, {fetchTeamRankings})(Team)