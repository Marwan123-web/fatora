import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { emptyInvoice } from "../../redux-toolkit/invoice/slice";
import { addInvoice } from "../../redux-toolkit/invoices/slice";
import Button from "../Shared/Button";
import Receipt from "./Receipt";

const InvoiceModal = ({ close }: { close: any }) => {
  const { t } = useTranslation("common");

  const invoice = useSelector((state: any) => state.invoice);

  const invoices = useSelector((state: any) => state.invoices);

  const dispatch = useDispatch();

  const addNextInvoiceHandler = (e: any) => {
    dispatch(addInvoice({ ...invoice, invoiceNumber: `${invoices.length}` }));
    dispatch(emptyInvoice());
    window.location.href = "/invoices/" + invoices.length;
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
        <Receipt invoice={invoice} />
        <div className="mt-4 flex space-x-2 px-4 pb-6">
          <Button
            ButtonFun={addNextInvoiceHandler}
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <span>{t("save")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
