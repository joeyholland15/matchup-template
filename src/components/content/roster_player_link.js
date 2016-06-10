import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class PlayerLink extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Link to='/player' onClick={e => {
         e.preventDefault()
         browserHistory.push('/player/profile')
         this.props.onClick()
       }}>
        <div id={this.props.player.name} className="player-row">
          <div className="player-attr row-small">{this.props.player.no}</div>
          <div className="player-attr row-large">{this.props.player.name}</div>
          <div className="player-attr row-small">{this.props.player.pos}</div>
          <div className="player-attr row-small">{this.props.player.year}</div>
          <div className="player-attr row-small">{this.props.player.ht}</div>
          <div className="player-attr row-small">{this.props.player.wt}</div>
        </div>
      </Link>
    )
  }
}

export default PlayerLink