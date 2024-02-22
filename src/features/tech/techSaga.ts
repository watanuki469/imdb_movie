import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, actor, movieItem, singleMovie, tech } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TechActions } from './techSlice';

function* fetchTechList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<tech> = yield call(genresApi.listgetTehnicalSpecByMovieIds, action.payload)
        yield put(TechActions.fetchTechListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch tech list', error)
        yield put(TechActions.fetchTechListFailed)
    }
}

export default function* TechSaga() {
    yield takeEvery(TechActions.fetchTechList.type, fetchTechList)
}