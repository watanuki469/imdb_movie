import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, knowFor, PaginationParams } from 'models';

export interface knowForState {
    loading: boolean;
    list: knowFor[];
}

const initialState: knowForState = {
    loading: false,
    list: [],
}

const knowForSlice = createSlice({
    name: 'knowFor',
    initialState,
    reducers: {
        fetchknowForList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch knowFor list
        fetchknowForListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            state.loading = false;
        },
        fetchknowForListFailed(state) {
            state.loading = false;
        },
     
      
    },
});

// Actions
export const knowForActions = knowForSlice.actions;

// Selectors
export const selectknowForList = (state: RootState) => state.knowFor.list;

// Reducer
const knowForReducer = knowForSlice.reducer;
export default knowForReducer;