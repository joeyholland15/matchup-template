import React, { Component } from 'react'
import { connect } from 'react-redux'

class Matchup extends Component {
  render() {
    return (
      <div className="col-container matchup-container">
        <div className="content matchup-content">
        </div>
      </div>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop

}

// export default connect(null, {})(Navbar)

export default Matchup