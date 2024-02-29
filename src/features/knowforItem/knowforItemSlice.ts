import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListParams, movieItem } from "models";

export interface knowforItemState {
    loading: boolean;
    list: movieItem[];
}

const initialState: knowforItemState = {
    loading: false,
    list: [],
};

const knowforItemSlice = createSlice({
    name: 'knowforItem',
    initialState,
    reducers: {
        fetchknowforItemList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie item list
        fetchknowforItemListSuccess(state, action: PayloadAction<any>) {
            state.list = [...state.list, action.payload.results]
            state.loading = false
        },
        fetchknowforItemListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
      
    }
})

//Actions
export const knowforItemActions = knowforItemSlice.actions
//Selectors
export const selectknowforItemList = (state: RootState) => state.knowforItem.list
// Reducer
const knowforItemReducer = knowforItemSlice.reducer;
export default knowforItemReducer