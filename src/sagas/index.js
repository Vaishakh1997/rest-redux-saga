import { all } from 'redux-saga/effects'
import homeSaga from '../sagas/homeSaga'
import DetailSaga from './detailSaga'

export default function* rootSaga() {
  yield all([
    homeSaga(),
    DetailSaga()
  ])
}