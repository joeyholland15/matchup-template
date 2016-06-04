import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class TeamLink extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Link to='/team' onClick={e => {
         e.preventDefault()
         browserHistory.push('/team')
         this.props.onClick()
       }}><div 
        className="side-row" 
        id={this.props.team}
      >
      </div></Link>
    )
  }
}

export default TeamLink