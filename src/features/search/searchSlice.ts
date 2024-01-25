import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListParams, Movie, movieItem } from "models";

export interface searchState {
    loading: boolean;
    list: Movie[];
    // list2:movieItem[];
    filter: ListParams
}

const initialState: searchState = {
    loading: false,
    list: [],
    // list2:[],
    filter: {
        _: 1,
        index: 15
    },
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        fetchSearchList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch search list
        fetchSearchListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            // state.list = [...state.list, action.payload.results]
            // state.list = [ action.payload.results]
            state.loading = false
        },
        fetchSearchListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },

    }
})
//Actions
export const searchActions = searchSlice.actions
//Selectors
export const selectSearchList = (state: RootState) => state.search.list
export const selectSearchFilterList = (state: RootState) => state.search.filter

// Reducer
const searchReducer = searchSlice.reducer;
export default searchReducer
