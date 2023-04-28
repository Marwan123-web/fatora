import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/slice";
import invoicesSlice from "./invoices/slice";

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice,
    invoices: invoicesSlice,
  },
});
