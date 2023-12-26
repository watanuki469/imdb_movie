import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListParams, movieItem } from "models";

export interface movieItemState {
    loading: boolean;
    list: movieItem[];
    list2: movieItem[];
    filter: ListParams;
}

const initialState: movieItemState = {
    loading: false,
    list: [],
    list2: [],
    filter: {
        _: 1,
        index: 15,
    },
};

const movieItemSlice = createSlice({
    name: 'movieItem',
    initialState,
    reducers: {
        fetchmovieItemList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie item list
        fetchmovieItemListSuccess(state, action: PayloadAction<any>) {
            state.list = [...state.list, action.payload.results]
            state.loading = false
        },
        fetchmovieItemListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
        setFilter(state,action:PayloadAction<ListParams>){
            state.filter=action.payload;
        },
    }
})
//Actions
export const movieItemActions = movieItemSlice.actions
//Selectors
export const selectmovieItemList = (state: RootState) => state.movieItem.list
export const selectmovieItemListSlicer = (state: RootState) => state.movieItem.list.slice
export const selectMovieItemFilter = (state: RootState) => state.movieItem.filter;

// Reducer
const movieItemReducer = movieItemSlice.reducer;
export default movieItemReducer