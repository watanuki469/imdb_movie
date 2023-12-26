import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, Movie, PaginationParams } from 'models';

export interface MovieState {
    loading: boolean;
    list: Movie[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: MovieState = {
    loading: false,
    list: [],
    filter: {
        _: 1,
        index: 15,
    },
    pagination: {
        _: 1,
        index: 15
    },
  
}

const movieSlice = createSlice({
    name: 'Movie',
    initialState,
    reducers: {
        fetchMovieList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie list
        fetchMovieListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results.filter((_:any,index:any)=>{
                return index<=17
            })
            state.loading = false;
        },
        fetchMovieListFailed(state) {
            state.loading = false;
        },
        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },
        setCount(state, action: PayloadAction<any>) {
            state.list = action.payload.count
            state.loading = false;
        },
    },
});

// Actions
export const movieActions = movieSlice.actions;

// Selectors
export const selectMovieList = (state: RootState) => state.movie.list;
export const selectMovieFilter = (state: RootState) => state.movie.filter;
export const selectmoviePagination = (state: RootState) => state.movie.pagination;

// Reducer
const movieReducer = movieSlice.reducer;
export default movieReducer;