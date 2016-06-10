import React from 'react'
import { Link } from 'react-router'

const Navmenu = () => {
  return (
    <ul className="navmenu menu">
      <li className="options image"><Link to="/rankings"><img src="../images/Drawing.png"/></Link></li>
      <li className="options text"><Link to='/player'>Players</Link></li>
      <li className="options text"><Link to='/rankings'>Teams</Link></li>
      <li className="options text"><Link to='/matchup'>Matchups</Link></li>
    </ul>
  )
}

export default Navmenu
