import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "app/store";
import { actor, product } from "models";

export interface ProductState {
    loading: boolean;
    list: product[];
}

const initialState: ProductState = {
    loading: false,
    list: [],
};

const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        fetchProductList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch single movie list
        fetchProductListSuccess(state, action: PayloadAction<any>) {
            // state.list = [...state.list, action.payload.results]
            state.list = [action.payload.results]
            state.loading = false
        },
        fetchProductListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },

    }
})
//Actions
export const ProductActions = productSlice.actions

//Selectors
export const selectProductLoading = (state: RootState) => state.product.loading
export const selectProductList = (state: RootState) => state.product.list

// Reducer
const ProductReducer = productSlice.reducer;
export default ProductReducer