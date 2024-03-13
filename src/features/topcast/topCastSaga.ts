import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, actor } from 'models';
import { call, put, takeEvery } from 'redux-saga/effects';
import { topCastActions } from './topCastSlice';

function* fetchtopCastList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<actor> = yield call(genresApi.retrievegetActorDetailsById, action.payload)
        yield put(topCastActions.fetchtopCastListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch movie item list', error)
        yield put(topCastActions.fetchtopCastListFailed)
    }
}


export default function* topCastSaga() {
    yield takeEvery(topCastActions.fetchtopCastList.type, fetchtopCastList)
}