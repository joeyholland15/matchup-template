import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class PlayerLink extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Link to='/player' onClick={e => {
         e.preventDefault()
         browserHistory.push('/player')
         this.props.onClick()
       }}><div 
        id={this.props.player.name}
      >
      {this.props.player.name}
      </div></Link>
    )
  }
}

export default PlayerLink