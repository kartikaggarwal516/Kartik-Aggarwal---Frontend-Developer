import { put, takeEvery } from '@redux-saga/core/effects'
import { FETCH_INFO, setInfo } from '../Actions/Actions'

const url = 'https://api.spacexdata.com/v3/info'

function * fetchInfo () {
  let res = yield fetch(url)
  res = yield res.json()
  yield put(setInfo(res))
}

export default [
  takeEvery(FETCH_INFO, fetchInfo)
]
