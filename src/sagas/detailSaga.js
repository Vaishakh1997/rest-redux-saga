import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../action-types'
import { fetchCountryDetailSuccess, fetchCountryDetailFailure } from '../actions/detail';
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