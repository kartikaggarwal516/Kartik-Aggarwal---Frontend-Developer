import { put, takeEvery } from '@redux-saga/core/effects'
import { FETCH_ROCKETS, setRockets } from '../Actions/Actions'

const url = 'https://api.spacexdata.com/v3/rockets'

function * fetchInfo () {
  let res = yield fetch(url)
  res = yield res.json()
  yield put(setRockets(res))
}

export default [
  takeEvery(FETCH_ROCKETS, fetchInfo)
]
