import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class MatchupLink extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="upcoming-row" onClick={e => {
        e.preventDefault()
        this.props.onClick()}}
      >
        <span className="matchup-grid-item">{this.props.teams.away} @ {this.props.teams.home}</span>
      </div>
    )
  }
}

export default MatchupLink