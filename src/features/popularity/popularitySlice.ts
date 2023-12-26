import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { popularity } from "models";

export interface popularityState {
    loading: boolean;
    list: popularity[];

}

const initialState: popularityState = {
    loading: false,
    list: [],
};

const popularitySlice = createSlice({
    name: 'popularity',
    initialState,
    reducers: {
        fetchPopularityList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        fetchPopularityListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            state.loading = false
        },
        fetchPopularityListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },

    }
})
//Actions
export const popularityActions = popularitySlice.actions
//Selectors
export const selectPopularityList = (state: RootState) => state.popularity.list

// Reducer
const popularityReducer = popularitySlice.reducer;
export default popularityReducer