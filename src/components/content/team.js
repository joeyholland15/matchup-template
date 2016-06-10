import React, { Component } from 'react'
import TeamMenu from '../side/team_menu'
import PlayerLink from '../containers/filter_player'
import { connect } from 'react-redux'
import { fetchTeamRoster } from '../../actions'
import teamIds from '../../helpers/scraping_data'
import { browserHistory } from 'react-router'

class Team extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTeamRoster(teamIds[this.props.activeTeam])
  }

  render () {
    return (
      <div className="col-container team-container">
        <TeamMenu />
        <div className="content col team-content">
          {this.props.teamRoster.map((player, i) => {
            return <PlayerLink key={i} player={player} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeTeam: state.activeTeam,
    teamRoster: state.teamRoster
  }
}

export default connect(mapStateToProps, { fetchTeamRoster })(Team)


