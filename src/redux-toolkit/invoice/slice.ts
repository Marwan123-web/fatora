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
        taxRate: "",
        discountRate: "",
        subTotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
        items: [{ id: "0", name: "", price: 0, quantity: 1 }],
      });

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: invoiceinitialState || {
    cashierName: "",
    customerName: "",
    taxRate: "",
    discountRate: "",
    subTotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
    items: [{ id: "0", name: "", price: 0, quantity: 1 }],
  },
  reducers: invoiceReducers,
});

export const { addItem, editItem, deleteItem, calcTotals, updateInvInfo } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
