import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import genreReducer from 'features/genre/genreSlice'
import movieReducer from 'features/movie/movieSlice'
import movieItemReducer from 'features/movieItem/movieItemSlice'
import singleMovieReducer from 'features/singleMovie/singleMovieSlice'
import popularityReducer from 'features/popularity/popularitySlice'
import searchReducer from 'features/search/searchSlice'
import searchItemReducer from 'features/searchItem/searchItemSlice'
import castReducer from 'features/cast/castSlice'
import StarReducer from 'features/star/starSlice'
import ActorReducer from 'features/actor/actorSlice'
import AwardReducer from 'features/award/awardSlice'
import movieAwardReducer from 'features/movieAward/movieAwardSlice'
import singleStarReducer from 'features/singleStar/singleStarSlice'
import TechReducer from 'features/tech/techSlice'
import knowForReducer from 'features/knowfor/knowForSlice'
import knowforItemReducer from 'features/knowforItem/knowforItemSlice'
import authReducer from 'features/auth/authSlice'
import ProductReducer from 'features/product/productSlice'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    genre: genreReducer,
    movie: movieReducer,
    movieItem: movieItemReducer,
    cast:castReducer,
    singleMovie: singleMovieReducer,
    searchItem: searchItemReducer,
    popularity: popularityReducer,
    search: searchReducer,
    star:StarReducer,
    actor:ActorReducer,
    award:AwardReducer,
    singleStar:singleStarReducer,
    movieAward:movieAwardReducer,
    tech:TechReducer,
    knowFor:knowForReducer,
    knowforItem:knowforItemReducer,
    auth: authReducer,
    product:ProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
