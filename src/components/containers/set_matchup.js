import { connect } from 'react-redux'
import { setMatchup } from '../../actions'
import MatchupLink from '../content/matchup_link'

const mapStateToProps = (state) => {
  return {
    matchup: state.matchup
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setMatchup(ownProps.teams))
    }
  }
}

const SetMatchup = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchupLink)

export default SetMatchup