import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, movieAward, star } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { movieAwardActions } from './movieAwardSlice';

function* fetchmovieAwardList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<movieAward> = yield call(genresApi.listgetAwardsByMovieIds, action.payload)
        yield put(movieAwardActions.fetchmovieAwardListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch movieAward list', error)
        yield put(movieAwardActions.fetchmovieAwardListFailed)
    }
}


export default function* movieAwardSaga() {
    yield takeLatest(movieAwardActions.fetchmovieAwardList.type, fetchmovieAwardList)
}