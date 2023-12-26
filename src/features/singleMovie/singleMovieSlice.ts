import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { movieItem, singleMovie } from "models";

export interface movieItemState {
    loading: boolean;
    list: singleMovie[];
}

const initialState: movieItemState = {
    loading: false,
    list: [],
};

const singleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        fetchSingleMovieList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie item list
        fetchSingleMovieListSuccess(state, action: PayloadAction<any>) {
            // state.list = [...state.list, action.payload.results]
            state.list = [action.payload.results]
            state.loading = false
        },
        fetchSingleMovieListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
       
        
    }
})
//Actions
export const singleMovieActions =singleMovieSlice.actions
//Selectors
export const selectSingleMovieList = (state: RootState) => state.singleMovie.list
// Reducer
const singleMovieReducer = singleMovieSlice.reducer;
export default singleMovieReducer