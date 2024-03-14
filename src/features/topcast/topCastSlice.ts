import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListParams, actor } from "models";

export interface topCastState {
    loading: boolean;
    list: actor[];
    filter: ListParams;
}

const initialState: topCastState = {
    loading: false,
    list: [],
    filter: {
        _: 1,
        index: 15,
    },
};

const topCastSlice = createSlice({
    name: 'topCast',
    initialState,
    reducers: {
        fetchtopCastList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie item list
        fetchtopCastListSuccess(state, action: PayloadAction<any>) {
            state.list = [...state.list, action.payload.results]
            state.loading = false
        },
        fetchtopCastListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },

    }
})

//Actions
export const topCastActions = topCastSlice.actions
//Selectors
export const selecttopCastList = (state: RootState) => state.topCast.list
export const selecttopCastListSlicer = (state: RootState) => state.topCast.list.slice

// Reducer
const topCastReducer = topCastSlice.reducer;
export default topCastReducer