import Button from "../Shared/Button";
import Header from "./Header";
import Info from "./Info";
import ItemsTable from "./ItemsTable";
import Summary from "./Summary";

const Invoice = () => {
  const addItemHandler = () => {};
  const reviewInvoiceHandler = () => {};

  return (
    <form
      className="relative flex flex-col px-2 md:flex-row"
      onSubmit={reviewInvoiceHandler}
    >
      <div className="my-6 flex-1 space-y-2  rounded-md bg-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <Header />
        <h1 className="text-center text-lg font-bold">INVOICE</h1>
        <Info />
        <ItemsTable items={[{ id: "1", name: "1", price: 1, quantity: 1 }]} />
        <Button
          classes="rounded-md bg-blue-500 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
          ButtonFun={addItemHandler}
        >
          Add Item
        </Button>
      </div>
      <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
          <Summary />
        </div>
      </div>
    </form>
  );
};

export default Invoice;