import info from './InfoReducer'
import launches from './LaunchesReducer'
import page from './PageReducer'
import rockets from './RocketsReducer'
import dragons from './DragonsReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  info,
  launches,
  activePage: page,
  rockets,
  dragons
})
