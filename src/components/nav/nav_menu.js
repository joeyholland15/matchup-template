import React from 'react'
import { Link } from 'react-router'

const Navmenu = () => {
  return (
    <ul className="navmenu menu">
      <li className="options image"><a href="#"><img src="../images/Drawing.png"/></a></li>
      <li className="options text"><Link to='/players'>Players</Link></li>
      <li className="options text"><Link to='/rankings'>Teams</Link></li>
      <li className="options text"><Link to='/matchups'>Matchups</Link></li>
    </ul>
  )
}

export default Navmenu
