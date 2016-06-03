import { connect } from 'react-redux'
import { setConferenceFilter } from '../../actions'
import ConferenceLink from '../content/conference_link'

const mapStateToProps = (state, ownProps) => {
  return {
    activeConference: ownProps.conference === state.activeConference
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setConferenceFilter(ownProps.conference))
    }
  }
}

const FilterConference = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConferenceLink)

export default FilterConference