import { SET_LAUNCHES } from '../Actions/Actions'

const defaultState = []
export default function LaunchReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_LAUNCHES : {
      state = [...action.payload]
      return state
    }
    default: return state
  }
}
