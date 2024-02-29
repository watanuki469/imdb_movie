import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, movieItem } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { knowforItemActions } from './knowforItemSlice';

function* fetchknowforItemList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<movieItem> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(knowforItemActions.fetchknowforItemListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch movie item list', error)
        yield put(knowforItemActions.fetchknowforItemListFailed)
    }
}

export default function* knowforItemSaga() {
    yield takeEvery(knowforItemActions.fetchknowforItemList.type, fetchknowforItemList)
}