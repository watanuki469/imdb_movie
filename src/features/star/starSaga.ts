import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, actor, movieItem, singleMovie, star } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { StarActions } from './starSlice';

function* fetchStarList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<actor> = yield call(genresApi.retrievegetActorDetailsById, action.payload)
        yield put(StarActions.fetchStarListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch single movie list', error)
        yield put(StarActions.fetchStarListFailed)
    }
}


export default function* starSaga() {
    yield takeLatest(StarActions.fetchStarList.type, fetchStarList)
}