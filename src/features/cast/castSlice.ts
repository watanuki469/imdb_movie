import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { cast, ListParams } from "models";

export interface castState {
    loading: boolean;
    list: cast[];
}

const initialState: castState = {
    loading: false,
    list: [],
};

const castSlice = createSlice({
    name: 'cast',
    initialState,
    reducers: {
        fetchCastList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch cast list
        fetchCastListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results.roles
            state.loading = false
        },
        fetchCastListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
      
    }
})

//Actions
export const castActions = castSlice.actions
//Selectors
export const selectCastList = (state: RootState) => state.cast.list

// Reducer
const castReducer = castSlice.reducer;
export default castReducer