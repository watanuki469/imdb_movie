import genresApi from 'api/genresApi';
import { Movie, ListResponse, ListParams, knowFor } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { knowForActions } from './knowForSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchknowForList(action: PayloadAction<ListParams>) {
    const options: ListResponse<knowFor> = yield call(genresApi.listgetMoviesKnownForByIds, action.payload);
    yield put(knowForActions.fetchknowForListSuccess(options))
}

export default function* knowForSaga() {
    yield takeLatest(knowForActions.fetchknowForList.type, fetchknowForList);
}