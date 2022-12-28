import { put, takeEvery } from '@redux-saga/core/effects'
import { FETCH_LAUNCHES, setLaunches } from '../Actions/Actions'

function * fetchLaunches (action) {
  let res = yield fetch(action.payload)
  res = yield res.json()
  yield put(setLaunches(res))
}

export default [
  takeEvery(FETCH_LAUNCHES, fetchLaunches)
]
