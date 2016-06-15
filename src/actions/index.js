import axios from 'axios'
import * as actions from './types'

const API = 'http://localhost:8081'

export function fetchTeamRankings() {
  const request = axios.get('http://localhost:8081/api/rankings')
  return {
    type: actions.FETCH_TEAM_RANKINGS,
    payload: request
  }
}

export function fetchUpcomingMatchups() {
  const request = axios.get('http://localhost:8081/api/matchups')
  return {
    type: actions.FETCH_UPCOMING_MATCHUPS,
    payload: request
  }
}

export function fetchTeamRoster(team) {
  const request = axios.get('http://localhost:8081/api/roster/' + team)
  return {
    type: actions.FETCH_TEAM_ROSTER,
    payload: request
  }
}

export function setConferenceFilter(conference) {
  return {
    type: actions.SET_CONFERENCE_FILTER,
    conference
  }
}

export function setTeamFilter(team) {
  return {
    type: actions.SET_TEAM_FILTER,
    team
  }
}

export function setPlayerFilter(player) {
  return {
    type: actions.SET_PLAYER_FILTER,
    player
  }
}

export function setMatchup(teams) {
  return {
    type: actions.SET_MATCHUP,
    teams
  }
}