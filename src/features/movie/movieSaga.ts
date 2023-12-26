import genresApi from 'api/genresApi';
import { Movie, ListResponse, ListParams } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { movieActions } from './movieSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchMovieList(action: PayloadAction<ListParams>) {
    const options: ListResponse<Movie> = yield call(genresApi.retrievegetMoviesByGenre, action.payload);
    yield put(movieActions.fetchMovieListSuccess(options))
}

export default function* movieSaga() {
    yield takeLatest(movieActions.fetchMovieList.type, fetchMovieList);
}