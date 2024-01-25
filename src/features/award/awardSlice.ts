import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { award } from "models";

export interface AwardState {
    loading: boolean;
    list: award[];
}

const initialState: AwardState = {
    loading: false,
    list: [],
};

const AwardSlice = createSlice({
    name: 'award',
    initialState,
    reducers: {
        fetchAwardList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch Award list
        fetchAwardListSuccess(state, action: PayloadAction<any>) {
            state.list = [state.list,...action.payload.results]
            state.loading = false
        },
        fetchAwardListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },


    }
})
//Actions
export const AwardActions = AwardSlice.actions

//Selectors
export const selectAwardLoading = (state: RootState) => state.award.loading
export const selectAwardList = (state: RootState) => state.award.list

// Reducer
const AwardReducer = AwardSlice.reducer;
export default AwardReducer