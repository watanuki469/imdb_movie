import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, product } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ProductActions } from './productSlice';

function* fetchProductList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<product> = yield call(genresApi.listgetProductionLocationsByMovieIds, action.payload)
        yield put(ProductActions.fetchProductListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch Product list', error)
        yield put(ProductActions.fetchProductListFailed)
    }
}

export default function* ProductSaga() {
    yield takeEvery(ProductActions.fetchProductList.type, fetchProductList)
}