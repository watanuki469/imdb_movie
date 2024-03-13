import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, search } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { searchActions } from './searchSlice';

function* fetchSearchList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<search> = yield call(genresApi.retrievegetMovieIdByTitle, action.payload)
        yield put(searchActions.fetchSearchListSuccess(response))
        
    }
    catch (error) {
        console.log('fail to fetch search item list', error)
        yield put(searchActions.fetchSearchListFailed)
    }
}

export default function* searchSaga() {
    yield takeLatest(searchActions.fetchSearchList.type, fetchSearchList)
    // yield debounce(500,searchActions.fetchSearchList.type, fetchSearchListItem)

}