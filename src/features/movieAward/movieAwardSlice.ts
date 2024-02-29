import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { movieAward } from "models";

export interface movieAwardState {
    loading: boolean;
    list: movieAward[];
}

const initialState: movieAwardState = {
    loading: false,
    list: [],
};

const movieAwardSlice = createSlice({
    name: 'movieAward',
    initialState,
    reducers: {
        fetchmovieAwardList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movieAward list
        fetchmovieAwardListSuccess(state, action: PayloadAction<any>) {
            state.list = [state.list,...action.payload.results]
            state.loading = false
        },
        fetchmovieAwardListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },


    }
})
//Actions
export const movieAwardActions = movieAwardSlice.actions

//Selectors
export const selectmovieAwardLoading = (state: RootState) => state.movieAward.loading
export const selectmovieAwardList = (state: RootState) => state.movieAward.list

// Reducer
const movieAwardReducer = movieAwardSlice.reducer;
export default movieAwardReducer