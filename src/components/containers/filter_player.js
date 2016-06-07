import { connect } from 'react-redux'
import { setPlayerFilter } from '../../actions'
import PlayerLink from '../content/roster_player_link'

const mapStateToProps = (state, ownProps) => {
  return {
    activePlayer: ownProps.player.name === state.activePlayer.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setPlayerFilter(ownProps.player))
    }
  }
}

const FilterPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerLink)

export default FilterPlayer