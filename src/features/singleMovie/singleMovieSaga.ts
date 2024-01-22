import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, movieItem, singleMovie } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { singleMovieActions } from './singleMovieSlice';

function* fetchSingleMovieList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<singleMovie> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(singleMovieActions.fetchSingleMovieListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch single movie list', error)
        yield put(singleMovieActions.fetchSingleMovieListFailed)
    }
}


export default function* singleMovieSaga() {
    yield takeLatest(singleMovieActions.fetchSingleMovieList.type, fetchSingleMovieList)
    // yield takeEvery(singleMovieActions.fetchSingleMovieList.type, fetchSingleMovieList)
}