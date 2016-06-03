import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    //need to define these things 
    active: ownProps.conference === state.activeConference
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setConferenceFilter(ownProps.conference))
    }
  }
}

//connect the component down here
const FilterConference = connect(
  mapStateToProps,
  mapDispatchToProps
)(//name of component)

export default FilterConference