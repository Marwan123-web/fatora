import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../shared/LocalStorage";
import { invoiceReducers } from "./reducer";

const invoiceinitialState =
  localStorageMethods.getItem("invoice") !== null &&
  localStorageMethods.getItem("invoice") !== undefined
    ? localStorageMethods.getItem("invoice")
    : localStorageMethods.addIetm("invoice", {
        cashierName: "",
        customerName: "",
        items: [{ id: "0", name: "", price: 1, quantity: 1 }],
      });

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: invoiceinitialState || {
    cashierName: "",
    customerName: "",
    items: [{ id: "0", name: "", price: 1, quantity: 1 }],
  },
  reducers: invoiceReducers,
});

export const { addItem, editItem, deleteItem, calcTotal, updateInvInfo } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
