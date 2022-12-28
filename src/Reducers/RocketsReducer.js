import { SET_ROCKETS } from '../Actions/Actions'

const defaultState = []
export default function RocketsReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_ROCKETS : {
      state = action.payload
      return state
    }
    default: return state
  }
}
