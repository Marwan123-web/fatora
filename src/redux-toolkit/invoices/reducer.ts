import { localStorageMethods } from "../../shared/LocalStorage";

export const invoicesReducers = {
  addInvoice: (state: any, action: any) => {
    state.push(action.payload);
    localStorageMethods.updateItem("invoices", state);
  },

  deleteInvoice: (state: any, action: any) => {
    state = state.filter(
      (invoice: any) =>
        invoice.invoiceNumber !== `${action.payload.invoiceNumber as string}`
    );

    localStorageMethods.updateItem("invoices", state);
  },

  // editInvoice: (state: any, action: any) => {
  //   let index = state.findIndex(
  //     (invoice: any) =>
  //       invoice?.invoiceNumber === `${action.payload.invoiceNumber as string}`
  //   );

  //   if (index !== -1) {
  //     state[index] = action.payload;
  //     localStorageMethods.updateItem("invoices", state);
  //   }
  // },

  // editInvoiceItem: (state: any, action: any) => {
  //   let index = state.findIndex(
  //     (invoice: any) =>
  //       invoice?.invoiceNumber === `${action.payload.invoiceNumber as string}`
  //   );

  //   if (index !== -1) {
  //     let itemIndex = state[index].findIndex(
  //       (item: any) => item?.id === `${action.payload.itemId as string}`
  //     );
  //     state[index].items[itemIndex] = action.payload;
  //     localStorageMethods.updateItem("invoices", state);
  //   }
  // },

  // deleteInvoiceItem: (state: any, action: any) => {
  //   state.items = state.items.filter(
  //     (item: any) => item.id !== `${action.payload.itemId as string}`
  //   );
  //   localStorageMethods.updateItem("invoices", state);
  // },
};
