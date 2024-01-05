import { all } from 'redux-saga/effects'
import genreSaga from 'features/genre/genreSaga';
import movieSaga from 'features/movie/movieSaga';
import movieItemSaga from 'features/movieItem/movieItemSaga';
import singleMovieSaga from 'features/singleMovie/singleMovieSaga';
import popularitySaga from 'features/popularity/popularitySaga';
import searchSaga from 'features/search/searchSaga';
import searchItemSaga from 'features/searchItem/searchItemSaga';

export default function* rootSaga() {
    console.log('rootSaga')
  yield all([genreSaga(),movieSaga(),movieItemSaga(),singleMovieSaga(),popularitySaga(),searchSaga(),searchItemSaga()]);
}