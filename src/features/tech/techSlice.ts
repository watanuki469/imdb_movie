import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "app/store";
import { actor, tech } from "models";

export interface TechState {
    loading: boolean;
    list: tech[];
}

const initialState: TechState = {
    loading: false,
    list: [],
};

const TechSlice = createSlice({
    name: 'Tech',
    initialState,
    reducers: {
        fetchTechList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch single movie list
        fetchTechListSuccess(state, action: PayloadAction<any>) {
            // state.list = [...state.list, action.payload.results]
            state.list =[action.payload.results.tehnical]
            state.loading = false
        },
        fetchTechListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },

    }
})
//Actions
export const TechActions = TechSlice.actions

//Selectors
export const selectTechLoading = (state: RootState) => state.tech.loading
export const selectTechList = (state: RootState) => state.tech.list

// Reducer
const TechReducer = TechSlice.reducer;
export default TechReducer