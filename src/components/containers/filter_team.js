import { connect } from 'react-redux'
import { setTeamFilter } from '../../actions'
import TeamLink from '../content/team_link'

const mapStateToProps = (state, ownProps) => {
  return {
    activeTeam: ownProps.team === state.activeTeam
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setTeamFilter(ownProps.team))
    }
  }
}

const FilterTeam = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamLink)

export default FilterTeam