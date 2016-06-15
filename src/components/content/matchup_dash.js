import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchupDashMenu from '../side/matchup_dash_menu'
import conferenceList from '../../helpers/conference_listings'
import { fetchUpcomingMatchups } from '../../actions'
import _ from 'underscore'

class MatchupDash extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(this.props.upcomingMatchups.length === 0) {
      this.props.fetchUpcomingMatchups()
    }
  }

  render() {
    return (
      <div className="col-container team-container">
        <MatchupDashMenu matchups={this.props.upcomingMatchups}/>
        <div className="content col matchup-dash-content">
          <header className="matchup-dash-header">
            <span className="matchup-header-text">
            Select a game from the menu or manually enter the 
            matchup you'd like to analyze!
            </span>
          </header>
          <div className="matchup-col-container">
            <section className="matchup-col matchup-select">
              <div className="matchup-dash-row matchup-select">
                <form className="matchup-grid-item">
                  Select the Road Team
                  <input type="text"/>
                </form>
              </div>
              <div className="matchup-dash-row matchup-team"></div>
            </section>{/*
            */}<section className="matchup-col matchup-versus">
              <div className="matchup-dash-row matchup-select">
                <form className="matchup-grid-item">
                  Select Date
                  <input type="date" name="matchup-date"/>
              </form>
              </div>
              <div className="matchup-dash-row matchup-team">
                <span className="matchup-grid-item">@</span>
              </div>
            </section>{/*
            */}<section className="matchup-col matchup-select">
              <div className="matchup-dash-row matchup-select">
                <form className="matchup-grid-item">
                  Select the Home Team
                  <input type="text"/>
                </form>
              </div>
              <div className="matchup-dash-row matchup-team"></div>
            </section>
          </div>
          <footer className="matchup-dash-footer">
            <button className="run-matchup-button">Run</button>
          </footer>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    upcomingMatchups: state.upcomingMatchups
  }
}

export default connect(mapStateToProps, {fetchUpcomingMatchups})(MatchupDash)
