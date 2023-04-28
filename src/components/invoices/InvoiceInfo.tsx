import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteInvoice } from "../../redux-toolkit/invoices/slice";
import { htmlStringToPdf } from "../../shared/ConvertToPdf";
import Button from "../Shared/Button";

const InvoiceInfo = () => {
  const { t } = useTranslation("common");

  const params = useParams();

  const invoices = useSelector((state: any) => state.invoices);
  const dispatch = useDispatch();
  let invoice = invoices?.find((res: any) => res?.invoiceNumber === params.id);
  if (!invoice) {
    window.location.href = "/invoices";
  }
  const SaveAsPDFHandler = async (e: any) => {
    e.preventDefault();
    let htmlString = document.getElementById("print") as any;
    await htmlStringToPdf("1", htmlString);
  };

  const deleteInvoiceFun = async () => {
    await dispatch(deleteInvoice(invoice));
    window.location.href = "/invoices";
  };
  // const editInvoiceFun = () => {};

  return (
    <>
      <div className="mt-4 flex space-x-2 px-4 pb-6 max-w-md  m-auto">
        <Button
          ButtonFun={SaveAsPDFHandler}
          classes="flex w-full items-center justify-center space-x-1 rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
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
          <span>{t("invoice.download")}</span>
        </Button>
        {/* <button
          onClick={editInvoiceFun}
          className="flex w-full items-center justify-center space-x-1 rounded-md bg-green-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
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
          <span>Edit</span>
        </button> */}

        <Button
          ButtonFun={SaveAsPDFHandler}
          classes="flex w-full items-center justify-center space-x-1 rounded-md bg-red-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span>{t("invoice.delete")}</span>
        </Button>
      </div>
      <div className="p-4 max-w-md align-middle m-auto bg-white" id="print">
        <h1 className="text-center text-lg font-bold text-gray-900">
          {t("invoice.invoice")}
        </h1>
        <div className="mt-6">
          <div className="mb-4 grid grid-cols-2">
            <span className="font-bold">{t("invoice.invoiceNumbe")}:</span>
            <span>{invoice.invoiceNumber}</span>
            <span className="font-bold">{t("invoice.cashier")}:</span>
            <span>{invoice.cashierName}</span>
            <span className="font-bold">{t("invoice.customer")}:</span>
            <span>{invoice.customerName}</span>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-y border-black/10 text-sm md:text-base">
                <th>{t("invoice.item")}</th>
                <th className="text-center">{t("invoice.qty")}</th>
                <th className="text-right">{t("invoice.price")}</th>
                <th className="text-right">{t("invoice.amount")}</th>
              </tr>
            </thead>
            <tbody className="h-[20vh]">
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
              <span className="font-bold">{t("invoice.subtotal")}:</span>
              <span>£{invoice.subTotal.toFixed(2)}</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="font-bold">{t("invoice.discount")}:</span>
              <span>£{parseFloat(invoice.discount).toFixed(2)}</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="font-bold">{t("invoice.tax")}:</span>
              <span>£{parseFloat(invoice.tax).toFixed(2)}</span>
            </div>
            <div className="flex w-full justify-between border-t border-black/10 py-2">
              <span className="font-bold">{t("invoice.total")}:</span>
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
          <span>{t("invoice.download")}</span>
        </button>
      </div>
    </>
  );
};

export default InvoiceInfo;
