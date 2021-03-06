import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import PlayerCard from '../../side/player_card'

class Advanced extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="col-container team-container">
        <PlayerCard />
        <div className="content col team-content">
          Advanced
        </div>
      </div>
    )
  }
}

export default Advanced