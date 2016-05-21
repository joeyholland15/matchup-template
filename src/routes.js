import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/app'
import Team from './components/content/team'
import Player from './components/content/player'
import Matchup from './components/content/matchup'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/teams' />
    <Route path='teams' component={Team} />
    <Route path='players' component={Player} />
    <Route path='matchups' component={Matchup} />
  </Route>
)
