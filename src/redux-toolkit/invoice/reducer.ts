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
    state.cashierName = action.payload.cashierName;
    state.customerName = action.payload.customerName;
    localStorageMethods.updateItem("invoice", state);
  },
  calcTotal: (state: any) => {
    let total = 0;
    state.items.forEach((item: any) => {
      total = total + parseInt(item.price) * item.quantity;
    });
    state.total = total;
  },
};
