import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from './nav_menu'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar nav">
        <Navmenu />
      </nav>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop

}

// export default connect(null, {})(Navbar)

export default Navbar