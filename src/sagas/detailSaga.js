import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../action-types'
import { fetchCountryDetailRequest, fetchCountryDetailSuccess, fetchCountryDetailFailure } from '../actions/detail';
import { loadCountryDetailApi } from '../services/detail';



function* fetchCountryDetail(params) {
   try {
      const countryDetail = yield call(loadCountryDetailApi, params);
      yield put(fetchCountryDetailSuccess(countryDetail.data));

    console.log("calling");
   } catch (error) {
      yield put(fetchCountryDetailFailure(error));
   }
}

function* DetailSaga() {
   yield takeEvery(actions.FETCH_COUNTRY_DETAIL_REQUEST, fetchCountryDetail);
}

export default DetailSaga;