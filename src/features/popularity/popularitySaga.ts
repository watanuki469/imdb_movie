import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, popularity } from 'models';
import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { popularityActions } from './popularitySlice';


function* fetchPopularityList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<popularity> = yield call(genresApi.listgetMoviesOrderByPopularitys,action.payload)
        yield put(popularityActions.fetchPopularityListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch fetchPopularity list', error)
        yield put(popularityActions.fetchPopularityListFailed)
    }
}


export default function* popularitySaga() {
    yield takeEvery(popularityActions.fetchPopularityList.type,fetchPopularityList)
}