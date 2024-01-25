import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { searchItem } from "models";

export interface searchItemState {
    loading: boolean;
    list: searchItem[];
}

const initialState: searchItemState = {
    loading: false,
    list: [],
};

const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState,
    reducers: {
        fetchSearchItemList(state, action: PayloadAction<any>) {
            // state.loading = true;
            state.list=[]
        },
        //cập nhật vào redux từ fetch search item movie list
        fetchSearchItemListSuccess(state, action: PayloadAction<any>) {
            // state.list = []
            // state.list = [state.list, action.payload.results]
            // state.list = [action.payload.results]
            // state.list = [...state.list, ...action.payload.results]
            // state.list = action.payload.results
            state.list = state.list.concat(action.payload.results);

            state.loading = false
        },
        fetchSearchItemListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },

    }
})
//Actions
export const searchItemActions = searchItemSlice.actions
//Selectors
export const selectSearchItemList = (state: RootState) => state.searchItem.list
// Reducer
const searchItemReducer = searchItemSlice.reducer;
export default searchItemReducer