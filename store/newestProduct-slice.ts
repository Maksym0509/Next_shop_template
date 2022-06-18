import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../lib/interface/products";
import { INewestProducts } from "../lib/interface/newestProductsState";

const initialState: INewestProducts = {
  newestProducts: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.newestProducts = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
