import React from 'react'
import { Link } from 'react-router'

const Navmenu = () => {
  return (
    <ul className="navmenu menu">
      <li className="options text"><Link to='/content/players'>Players</Link></li>
      <li className="options text"><Link to='/content/teams'>Teams</Link></li>
      <li className="options text"><Link to='/content/matchups'>Matchups</Link></li>
      <li className="options text"><Link to='/baseball/lineups'>Baseball</Link></li>
      <li className="options text"><Link to='/baseball/logs'>Player Logs</Link></li>
      <li className="options text">Advanced Stats</li>
    </ul>
  )
}

export default Navmenu
