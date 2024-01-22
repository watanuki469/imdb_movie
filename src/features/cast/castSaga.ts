import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, cast } from 'models';
import { call, put, takeEvery } from 'redux-saga/effects';
import { castActions } from './castSlice';

function* fetchCastList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<cast> = yield call(genresApi.listgetCastByMovieIds, action.payload)        
        yield put(castActions.fetchCastListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch cast list', error)
        yield put(castActions.fetchCastListFailed)
    }
}

export default function* castSaga() {
    yield takeEvery(castActions.fetchCastList.type, fetchCastList)
}