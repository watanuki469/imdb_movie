import { all } from 'redux-saga/effects'
import genreSaga from 'features/genre/genreSaga';
import movieSaga from 'features/movie/movieSaga';
import movieItemSaga from 'features/movieItem/movieItemSaga';
import singleMovieSaga from 'features/singleMovie/singleMovieSaga';
import popularitySaga from 'features/popularity/popularitySaga';
import searchSaga from 'features/search/searchSaga';
import searchItemSaga from 'features/searchItem/searchItemSaga';
import castSaga from 'features/cast/castSaga';
import starSaga from 'features/star/starSaga';
import actorSaga from 'features/actor/actorSaga';
import awardSaga from 'features/award/awardSaga';
import singleStarSaga from 'features/singleStar/singleStarSaga';
import movieAwardSaga from 'features/movieAward/movieAwardSaga';
import TechSaga from 'features/tech/techSaga';
import knowForSaga from 'features/knowfor/knowForSaga';
import knowforItemSaga from 'features/knowforItem/knowforItemSaga';
import authSaga from 'features/auth/authSaga';
import ProductSaga from 'features/product/productSaga';

export default function* rootSaga() {
    console.log('rootSaga')
  yield all([genreSaga(),movieSaga(),movieItemSaga(),singleMovieSaga(),
    popularitySaga(),searchSaga(),searchItemSaga(),castSaga(),starSaga(),actorSaga(),awardSaga()
    ,singleStarSaga(),movieAwardSaga(),TechSaga(),knowForSaga(),knowforItemSaga(),authSaga(),ProductSaga()]);
}