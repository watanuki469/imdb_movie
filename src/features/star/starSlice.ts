import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "app/store";
import { actor, star } from "models";

export interface starState {
    loading: boolean;
    list: actor[];
}

const initialState: starState = {
    loading: false,
    list: [],
};

const starSlice = createSlice({
    name: 'star',
    initialState,
    reducers: {
        fetchStarList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch single movie list
        fetchStarListSuccess(state, action: PayloadAction<any>) {
            // state.list = [...state.list, action.payload.results]
            state.list = [action.payload.results]
            state.loading = false
        },
        fetchStarListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },


    }
})
//Actions
export const StarActions = starSlice.actions

//Selectors
export const selectStarLoading = (state: RootState) => state.star.loading
export const selectStarList = (state: RootState) => state.star.list

// Reducer
const StarReducer = starSlice.reducer;
export default StarReducer