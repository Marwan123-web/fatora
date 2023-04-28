import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../shared/LocalStorage";
import { invoicesReducers } from "./reducer";

const invoicesinitialState =
  localStorageMethods.getItem("invoices") !== null &&
  localStorageMethods.getItem("invoices") !== undefined
    ? localStorageMethods.getItem("invoices")
    : localStorageMethods.addIetm("invoices", []);

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState: invoicesinitialState || [],
  reducers: invoicesReducers,
});

export const { addInvoice, deleteInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
