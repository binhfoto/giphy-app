import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {FETCH_REQUEST, getGiphySuccess, getGiphyFailed} from '../action';
import config from '../api/config';

function * fetchGiphy (action) {
    try {
        //https://api.giphy.com/v1/gifs/trending?api_key=1qg0cbZmGXN1HRg6hqwfM8JL4Dde3vIO&limit=5
        const {data} = yield call(axios.get, `${config.getApi}?api_key=${config.secretKey}&limit=${config.limit}&offset=${action.offset}`);
        yield put(getGiphySuccess(data.data));
    } catch (e) {
        yield put(getGiphyFailed(e))
    }
}

export function * handleFetch () {
   yield takeEvery(FETCH_REQUEST, fetchGiphy);
};