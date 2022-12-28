import { SET_DRAGONS } from '../Actions/Actions'

const defaultState = []
export default function DragonReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_DRAGONS: {
      state = action.payload
      return state
    }
    default: return state
  }
}
