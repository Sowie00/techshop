import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducers";
import productDetailsReducer from "./reducers/productDetailsReducer";
const initialState = {};
export const store = configureStore({
  reducer: {
    productList: productReducer,
    productDetails: productDetailsReducer,
  },
  initialState,
});
