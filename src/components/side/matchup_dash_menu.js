import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'
import { setMatchup } from '../../actions'
import { connect } from 'react-redux'
import SetMatchup from '../containers/set_matchup'

class MatchupMenu extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <aside className="team-list col upcoming-list">
        <header className="upcoming-dash-header">
          <span className="matchup-header-text">Upcoming Matchups</span>
        </header>
        {this.props.matchups.map((teams, i) =>
          <SetMatchup key={i} teams={teams} />
        )}
      </aside>
    )
  }
}

export default MatchupMenu