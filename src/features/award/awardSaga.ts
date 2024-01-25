import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, award } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AwardActions } from './awardSlice';

function* fetchAwardList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<award> = yield call(genresApi.listgetAwardsByIds, action.payload)
        yield put(AwardActions.fetchAwardListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch Award list', error)
        yield put(AwardActions.fetchAwardListFailed)
    }
}


export default function* awardSaga() {
    yield takeLatest(AwardActions.fetchAwardList.type, fetchAwardList)
}