import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, singleStar } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { singleStarActions } from './singleStarSlice';

function* fetchSingleStarList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<singleStar> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(singleStarActions.fetchSingleStarListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch single Star list', error)
        yield put(singleStarActions.fetchSingleStarListFailed)
    }
}


export default function* singleStarSaga() {
    // yield takeLatest(singleStarActions.fetchSingleStarList.type, fetchSingleStarList)
    yield takeEvery(singleStarActions.fetchSingleStarList.type, fetchSingleStarList)
}