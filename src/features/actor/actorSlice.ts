import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "app/store";
import { actor, star } from "models";

export interface ActorState {
    loading: boolean;
    list: star[];
}

const initialState: ActorState = {
    loading: false,
    list: [],
};

const ActorSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {
        fetchActorList(state, action: PayloadAction<any>) {
            // state.loading = true;
        },
        //cập nhật vào redux từ fetch actor list
        fetchActorListSuccess(state, action: PayloadAction<any>) {
            state.list = [action.payload.results]
            state.loading = false
        },
        fetchActorListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },


    }
})
//Actions
export const ActorActions = ActorSlice.actions

//Selectors
export const selectActorLoading = (state: RootState) => state.actor.loading
export const selectActorList = (state: RootState) => state.actor.list

// Reducer
const ActorReducer = ActorSlice.reducer;
export default ActorReducer