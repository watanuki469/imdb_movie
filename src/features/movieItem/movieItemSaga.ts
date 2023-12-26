import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, movieItem } from 'models';
import { call, put, takeEvery } from 'redux-saga/effects';
import { movieItemActions } from './movieItemSlice';

function* fetchMovieItemList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<movieItem> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(movieItemActions.fetchmovieItemListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch movie item list', error)
        yield put(movieItemActions.fetchmovieItemListFailed)
    }
}


export default function* movieItemSaga() {
    yield takeEvery(movieItemActions.fetchmovieItemList.type, fetchMovieItemList)
}