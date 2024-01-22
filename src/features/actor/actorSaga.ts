import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, actor, star } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ActorActions } from './actorSlice';

function* fetchActorList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<star> = yield call(genresApi.listgetActorBioByIds, action.payload)
        yield put(ActorActions.fetchActorListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch actor list', error)
        yield put(ActorActions.fetchActorListFailed)
    }
}


export default function* actorSaga() {
    yield takeLatest(ActorActions.fetchActorList.type, fetchActorList)
}