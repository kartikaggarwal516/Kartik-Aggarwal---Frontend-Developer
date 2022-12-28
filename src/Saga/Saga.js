import { all } from 'redux-saga/effects'
import LaunchSaga from './LaunchSaga'
import InfoSaga from './InfoSaga'
import DragonSaga from './DragonSaga'
import RocketSaga from './RocketSaga'

export default function * sagas () {
  yield all([
    ...LaunchSaga,
    ...InfoSaga,
    ...DragonSaga,
    ...RocketSaga
  ])
}
