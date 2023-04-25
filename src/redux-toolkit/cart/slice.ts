import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../shared/LocalStorage";
import { cartReducers } from "./reducer";

const cartinitialState =
  localStorageMethods.getItem("cart") !== null &&
  localStorageMethods.getItem("cart") !== undefined
    ? localStorageMethods.getItem("cart")
    : localStorageMethods.addIetm("cart", []);

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartinitialState || [],
  reducers: cartReducers,
});

export const { addItem, editItem, deleteItem, calcTotal } = cartSlice.actions;

export default cartSlice.reducer;
