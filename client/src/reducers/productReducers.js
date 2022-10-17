import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    productListRequest: (state) => {
      state.isLoading = true;
    },
    productListSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productSlice.actions;

export default productSlice.reducer;
