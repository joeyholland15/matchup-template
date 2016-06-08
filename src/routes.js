import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/app'
import Rankings from './components/content/rankings'
import Player from './components/content/player'
import Matchup from './components/content/matchup'
import ConferenceDash from './components/content/conference_dash'
import Team from './components/content/team'
import Stats from './components/content/player_menu/stats'
import Advanced from './components/content/player_menu/advanced'
import Logs from './components/content/player_menu/logs'
import Highlights from './components/content/player_menu/highlights'
import Notes from './components/content/player_menu/notes'
import Archive from './components/content/player_menu/archive'
import PlayerDash from './components/content/player_dash'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/rankings' />
    <Route path='rankings' component={Rankings} />
    <Route path='conference' component={ConferenceDash} />
    <Route path='player' component={PlayerDash} />
    <Route path='player/profile' component={Player} />
    <Route path='player/stats' component={Stats} />
    <Route path='player/advanced' component={Advanced} />
    <Route path='player/logs' component={Logs} />
    <Route path='player/highlights' component={Highlights} />
    <Route path='player/notes' component={Notes} />
    <Route path='player/archive' component={Archive} />
    <Route path='matchup' component={Matchup} />
    <Route path='team' component={Team} />
  </Route>
)
