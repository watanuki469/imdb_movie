import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { singleMovie, singleStar } from "models";

export interface StarItemState {
    loading: boolean;
    list: singleStar[];
}

const initialState: StarItemState = {
    loading: false,
    list: [],
};

const singleStarSlice = createSlice({
    name: 'singleStar',
    initialState,
    reducers: {
        fetchSingleStarList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch single Star list
        fetchSingleStarListSuccess(state, action: PayloadAction<any>) {
            // state.list = [...state.list, action.payload.results]
            // state.list = [action.payload.results]
            state.list = state.list.concat(action.payload.results);

            
            state.loading = false
        },
        fetchSingleStarListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
       
        
    }
})
//Actions
export const singleStarActions =singleStarSlice.actions
//Selectors
export const selectSingleStarList = (state: RootState) => state.singleStar.list
// Reducer
const singleStarReducer = singleStarSlice.reducer;
export default singleStarReducer