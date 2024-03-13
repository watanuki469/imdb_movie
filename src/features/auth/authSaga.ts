import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import { login, loginFailed, loginSuccess, logout } from './authSlice';

function* handleLogin(action: PayloadAction<any>) {
  // console.log('handle login', action)
  try {
    yield delay(1000);

    localStorage.setItem('access_token', 'fake_token');
      // yield put(
      //   loginSuccess({
      //     id: 1,
      //     name: 'Easy Frontend',
      //   })
      // );

      // redirect to admin page
      yield put({ type: 'NAVIGATE_TO_HOME' })
    } catch (error) {
      yield put(loginFailed((error as Error).message));
    }

    yield take(logout.type);
    yield call(handleLogout);

  }

function* handleLogout() {
    // console.log('handle logout')
    yield delay(500);
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    // redirect to login page
    yield put({ type: 'NAVIGATE_TO_DASHBOARD' })
  }

  // function* watchLoginFlow() {
  //   while (true) {
  //     const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  //     if (!isLoggedIn) {
  //       const action: PayloadAction<LoginPayload> = yield take(login.type);
  //       yield fork(login, action.payload);
  //     }

  //     yield take(logout.type);
  //     yield call(handleLogout);
  //   }
  // }

  export default function* authSaga() {
    yield all([takeLatest(login.type, handleLogin)]);
  }