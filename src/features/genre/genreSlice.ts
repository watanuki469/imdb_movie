import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { genres } from "models";

export interface genreState {
    loading: boolean;
    list: genres[];
    // filter: ListParams;
    // pagination: PaginationParams;
}

const initialState: genreState = {
    loading: false,
    list: [],
    // filter: {
    //     _page: 1,
    //     _limit: 15,
    // },

};

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        fetchGenreList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        fetchGenreListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            // state.pagination = action.payload
            state.loading = false
        },
        fetchGenreListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
        // setFilter(state, action: PayloadAction<ListParams>) {
        //     state.filter = action.payload;
        // },
    }
})
//Actions
export const genreActions = genreSlice.actions
//Selectors
export const selectGenreList = (state: RootState) => state.genre.list
// export const selectGenreFilter = (state: RootState) => state.genre.filter;
// export const selectGenrePagination = (state: RootState) => state.genre.pagination;
// Reducer
const genreReducer = genreSlice.reducer;
export default genreReducer