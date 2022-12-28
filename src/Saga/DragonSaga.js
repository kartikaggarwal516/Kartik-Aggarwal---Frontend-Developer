import { put, takeEvery } from '@redux-saga/core/effects'
import { FETCH_DRAGONS, setDragons } from '../Actions/Actions'

const url = 'https://api.spacexdata.com/v3/dragons'

function * fetchInfo () {
  let res = yield fetch(url)
  res = yield res.json()
  yield put(setDragons(res))
}

export default [
  takeEvery(FETCH_DRAGONS, fetchInfo)
]
