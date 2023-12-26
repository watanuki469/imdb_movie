import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, genres } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { genreActions } from './genreSlice';


function* fetchGenreList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<genres> = yield call(genresApi.getAll,action.payload)
        yield put(genreActions.fetchGenreListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch genre list', error)
        yield put(genreActions.fetchGenreListFailed)
    }
}


export default function* genreSaga() {
    yield takeLatest(genreActions.fetchGenreList.type,fetchGenreList)
}