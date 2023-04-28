import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { htmlStringToPdf } from "../../shared/ConvertToPdf";

const InvoiceInfo = () => {
  const params = useParams();

  const invoices = useSelector((state: any) => state.invoices);

  let invoice = invoices?.find((res: any) => res?.invoiceNumber === params.id);
  if (!invoice) {
    window.location.href = "/invoices";
  }
  const SaveAsPDFHandler = async (e: any) => {
    e.preventDefault();
    let htmlString = document.getElementById("print") as any;
    await htmlStringToPdf("1", htmlString);
  };

  return (
    <>
      <div className="mt-4 flex space-x-2 px-4 pb-6 max-w-md  m-auto">
        <button
          onClick={SaveAsPDFHandler}
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Download</span>
        </button>
      </div>
      <div className="p-4 max-w-md align-middle m-auto bg-white" id="print">
        <h1 className="text-center text-lg font-bold text-gray-900">INVOICE</h1>
        <div className="mt-6">
          <div className="mb-4 grid grid-cols-2">
            <span className="font-bold">Invoice Number:</span>
            <span>{invoice?.invoiceNumber}</span>
            <span className="font-bold">Cashier:</span>
            <span>{invoice?.cashierName}</span>
            <span className="font-bold">Customer:</span>
            <span>{invoice?.customerName}</span>
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
            <tbody>
              {invoice.items.map((item: any) => (
                <tr key={item.id}>
                  <td className="w-full">{item.name}</td>
                  <td className="min-w-[50px] text-center">{item.quantity}</td>
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
      <div className="mt-4 flex space-x-2 px-4 pb-6 max-w-md  m-auto">
        <button
          onClick={SaveAsPDFHandler}
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Download</span>
        </button>
      </div>
    </>
  );
};

export default InvoiceInfo;
