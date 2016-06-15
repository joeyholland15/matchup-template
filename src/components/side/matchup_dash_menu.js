import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'

export default class MatchupMenu extends Component {
  render () {
    return (
      <aside className="team-list col">
        {this.props.matchups.map((matchup, i) =>
          <div key={i} matchup={matchup}>{matchup.away} @ {matchup.home}</div>
        )}
      </aside>
    )
  }
}