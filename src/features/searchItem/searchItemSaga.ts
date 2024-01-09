import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, searchItem } from 'models';
import { call, debounce, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { searchItemActions } from './searchItemSlice';

function* fetchSearchItemList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<searchItem> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(searchItemActions.fetchSearchItemListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch search item movie list', error)
        yield put(searchItemActions.fetchSearchItemListFailed)
    }
}


export default function* searchItemSaga() {
    yield takeEvery(searchItemActions.fetchSearchItemList.type, fetchSearchItemList)
}