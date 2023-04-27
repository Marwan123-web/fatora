import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/slice";

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice,
  },
});
