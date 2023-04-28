import { localStorageMethods } from "../../shared/LocalStorage";

export const invoiceReducers = {
  addItem: (state: any) => {
    state.items.push({
      id: `${state.items.length}`,
      name: "",
      price: 1,
      quantity: 1,
    });
    localStorageMethods.updateItem("invoice", state);
  },
  editItem: (state: any, action: any) => {
    let index = state.items.findIndex(
      (invoice: any) => invoice?.id === `${action.payload.id as string}`
    );

    if (index !== -1) {
      state.items[index] = action.payload;
      localStorageMethods.updateItem("invoice", state);
    }
  },
  deleteItem: (state: any, action: any) => {
    state.items = state.items.filter(
      (item: any) => item.id !== `${action.payload.id as string}`
    );

    localStorageMethods.updateItem("invoice", state);
  },
  updateInvInfo: (state: any, action: any) => {
    action.payload.cashierName &&
      (state.cashierName = action.payload.cashierName);

    action.payload.customerName &&
      (state.customerName = action.payload.customerName);

    action.payload.taxRate && (state.taxRate = action.payload.taxRate);

    action.payload.discountRate &&
      (state.discountRate = action.payload.discountRate);

    localStorageMethods.updateItem("invoice", state);
  },

  calcTotals: (state: any) => {
    let subTotal = 0;
    state.items.forEach((item: any) => {
      subTotal = subTotal + parseInt(item.price) * item.quantity;
    });

    state.subTotal = subTotal || 0;

    state.tax = (parseInt(state.subTotal) * parseInt(state.taxRate)) / 100 || 0;
    state.discount =
      (parseInt(state.subTotal) * parseInt(state.discountRate)) / 100 || 0;

    state.total = state.subTotal + state.tax - state.discount || 0;

    localStorageMethods.updateItem("invoice", state);
  },

  emptyInvoice: (state: any) => {
    state = {
      invoiceNumber: "0",
      cashierName: "",
      customerName: "",
      taxRate: "",
      discountRate: "",
      subTotal: 0,
      tax: 0,
      discount: 0,
      total: 0,
      items: [{ id: "0", name: "", price: 0, quantity: 1 }],
    };
    localStorageMethods.updateItem("invoice", state);
  },
};
