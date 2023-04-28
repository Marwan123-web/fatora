import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux-toolkit/invoice/slice";
import Button from "../Shared/Button";
import Header from "./Header";
import Info from "./Info";
import InvoiceModal from "./InvoiceModal";
import ItemsTable from "./ItemsTable";
import Summary from "./Summary";

const Invoice = () => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const invoice = useSelector((state: any) => state.invoice);
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItem());
  };
  const reviewInvoiceHandler = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <form
      className="relative flex flex-col px-2 md:flex-row gap-5"
      onSubmit={reviewInvoiceHandler}
    >
      <div className="my-6 flex-1 space-y-2  rounded-md bg-white p-4 shadow-sm  md:p-6">
        <Header />
        <h1 className="text-center text-lg font-bold">
          {t("invoice.invoice")}
        </h1>
        <Info />
        <ItemsTable items={invoice.items} />
        <Button
          classes="rounded-md bg-blue-500 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
          ButtonFun={addItemHandler}
          label={"invoice.addItem"}
        ></Button>
      </div>
      <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 divide-y divide-gray-900/10 pb-8 my-6">
          <Button
            classes={
              "w-full rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
            }
            type="submit"
            label="invoice.reviewInvoice"
          />
          {isOpen && (
            <div className="fixed inset-0 bg-black/50">
              <InvoiceModal
                close={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
          )}
          <Summary />
        </div>
      </div>
    </form>
  );
};

export default Invoice;
