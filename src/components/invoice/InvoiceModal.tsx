import { useSelector } from "react-redux";
import { htmlStringToPdf } from "../../shared/ConvertToPdf";

const InvoiceModal = ({ close }: { close: any }) => {
  const invoice = useSelector((state: any) => state.invoice);
  const SaveAsPDFHandler = async (e: any) => {
    e.preventDefault();
    let htmlString = document.getElementById("print") as any;
    await htmlStringToPdf("1", htmlString.innerHTML as any);
  };
  const addNextInvoiceHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center align-center z-10"
      onClick={() => {
        close();
      }}
    >
      <div
        className="h-[auto] overflow-y-scroll my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <strong
          className="text-2xl cursor-pointer text-end inline-block p-2 w-full"
          onClick={() => close()}
        >
          &times;
        </strong>
        <div className="p-4" id="print">
          <h1 className="text-center text-lg font-bold text-gray-900">
            INVOICE
          </h1>
          <div className="mt-6">
            <div className="mb-4 grid grid-cols-2">
              <span className="font-bold">Invoice Number:</span>
              <span>{invoice.invoiceNumber}</span>
              <span className="font-bold">Cashier:</span>
              <span>{invoice.cashierName}</span>
              <span className="font-bold">Customer:</span>
              <span>{invoice.customerName}</span>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="border-y border-black/10 text-sm md:text-base">
                  <th>ITEM</th>
                  <th className="text-center">QTY</th>
                  <th className="text-right">PRICE</th>
                  <th className="text-right">AMOUNT</th>
                </tr>
              </thead>
              <tbody className="h-[20vh]">
                {invoice.items.map((item: any) => (
                  <tr key={item.id}>
                    <td className="w-full">{item.name}</td>
                    <td className="min-w-[50px] text-center">
                      {item.quantity}
                    </td>
                    <td className="min-w-[80px] text-right">
                      £{Number(+item.price).toFixed(2)}
                    </td>
                    <td className="min-w-[90px] text-right">
                      £{Number(+item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex flex-col items-end space-y-2">
              <div className="flex w-full justify-between border-t border-black/10 pt-2">
                <span className="font-bold">Subtotal:</span>
                <span>£{invoice.subTotal.toFixed(2)}</span>
              </div>
              <div className="flex w-full justify-between">
                <span className="font-bold">Discount:</span>
                <span>£{parseFloat(invoice.discount).toFixed(2)}</span>
              </div>
              <div className="flex w-full justify-between">
                <span className="font-bold">Tax:</span>
                <span>£{parseFloat(invoice.tax).toFixed(2)}</span>
              </div>
              <div className="flex w-full justify-between border-t border-black/10 py-2">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  £
                  {invoice.total % 1 === 0
                    ? invoice.total
                    : invoice.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-2 px-4 pb-6">
          <button
            className="flex w-full items-center justify-center space-x-1 rounded-md border border-blue-500 py-2 text-sm text-blue-500 shadow-sm hover:bg-blue-500 hover:text-white"
            onClick={SaveAsPDFHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Save & Download</span>
          </button>
          <button
            onClick={addNextInvoiceHandler}
            className="flex w-full items-center justify-center space-x-1 rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
