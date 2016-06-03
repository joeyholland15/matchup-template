import React, { Component } from 'React'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class ConferenceLink extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Link to='/conference' onClick={e => {
         e.preventDefault()
         browserHistory.push('/conference')
         this.props.onClick()
       }}><div 
        className="side-row" 
        id={this.props.conference}
      >
      </div></Link>
    )
  }
}

export default ConferenceLink