import React from 'react'
import { Link } from 'react-router'
import { Component } from 'react'
import { connect } from 'react-redux'

class PlayerCard extends Component {
  render () {
    return (
      <aside className="team-list col">
        <div className="player-header">
          <div className="player-title">{this.props.player.name}</div>
          <div className="player-info">
            <div className="info header-no">{this.props.player.no}</div>
            <div className="info team-logo"></div>
            <div className="info header-pos">{this.props.player.pos}</div>
          </div>
          <div className="pec-box">
            <div className="pec-breakdown">
              <div className="pec-data">Production: 8.56</div>
              <div className="pec-data">Experience: 4.23</div>
              <div className="pec-data">Ceiling: 9.85</div>
            </div>{/*}
            */}<div className="pec-total">22.64</div>
          </div>
        </div>
        <div className="player-menu-container">
          <div className="player-menu-col">
            <div className="player-menu-row menu-left">Stats</div>
            <div className="player-menu-row menu-left">Logs</div>
            <div className="player-menu-row menu-left">Notes</div>
          </div>{/*
          */}<div className="player-menu-col">
            <div className="player-menu-row menu-right">Advanced</div>
            <div className="player-menu-row menu-right">Highlights</div>
            <div className="player-menu-row menu-right">Archive</div>
          </div>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.activePlayer
  }
}

export default connect(
  mapStateToProps
)(PlayerCard)