import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../action-types'
import { fetchCountriesFailure, fetchCountriesSuccess } from '../actions/home';
import { loadCountriesApi } from '../services/home';



function* fetchCountries(URL) {
  console.log(URL);
   try {
      const countries = yield call(loadCountriesApi, URL);
      yield put(fetchCountriesSuccess(countries.data));
   } catch (error) {
      yield put(fetchCountriesFailure(error));
   }
}

function* HomeSaga() {
   yield takeEvery(actions.FETCH_COUNTRIES_REQUEST, fetchCountries);
}

export default HomeSaga;