import {put, takeEvery} from 'redux-saga/effects';
import axios from "axios";
import {fetchCountriesSucceeded, fetchCountriesFailed} from '../actions'
import {FETCH_COUNTRIES} from '../actions/actionTypes';

function* fetchCountries() {
    try {
        const countries = yield axios.get('http://localhost:3000/api/countries');
        yield put(fetchCountriesSucceeded(countries));
    } catch (error) {
        yield put(fetchCountriesFailed(error));
    }
}

function* countriesSaga() {
    yield takeEvery(FETCH_COUNTRIES, fetchCountries);
};

export default countriesSaga;