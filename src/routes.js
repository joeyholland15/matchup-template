import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/app'
import Rankings from './components/content/rankings'
import Player from './components/content/player'
import Matchup from './components/content/matchup'
import ConferenceDash from './components/content/conference_dash'
import Team from './components/content/team'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/rankings' />
    <Route path='rankings' component={Rankings} />
    <Route path='conference' component={ConferenceDash} />
    <Route path='players' component={Player} />
    <Route path='matchups' component={Matchup} />
    <Route path='team' component={Team} />
  </Route>
)
