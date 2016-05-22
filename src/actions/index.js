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