import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'

export default class MatchupMenu extends Component {
  render () {
    return (
      <aside className="team-list col upcoming-list">
        <header className="upcoming-dash-header">
          <span className="matchup-header-text">Upcoming Matchups</span>
        </header>
        {this.props.matchups.map((matchup, i) =>
          <div className="upcoming-row" key={i} matchup={matchup}>
            <span className="matchup-grid-item">{matchup.away} @ {matchup.home}</span>
          </div>
        )}
      </aside>
    )
  }
}