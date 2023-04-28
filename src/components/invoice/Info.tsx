import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateInvInfo } from "../../redux-toolkit/invoice/slice";
import Input from "../Shared/Input";

const Info = () => {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const invoice = useSelector((state: any) => state.invoice);

  const [invoiceInfo, setInvoiceInfo] = useState({
    cashierName: invoice.cashierName,
    customerName: invoice.customerName,
  });

  const updateInvoiceInfo = (filedName: string, value: string) => {
    setInvoiceInfo({ ...invoiceInfo, [filedName]: value });
    dispatch(updateInvInfo({ ...invoiceInfo, [filedName]: value } as any));
  };

  return (
    <div className="grid grid-cols-2 gap-2 pt-4 pb-8">
      <label htmlFor="cashierName" className="text-sm font-bold sm:text-base">
        {t("invoice.cashier")}:
      </label>

      <Input
        required={true}
        classes={"flex-1"}
        placeholder={"Cashier name"}
        type={"text"}
        name={"cashierName"}
        id={"cashierName"}
        value={invoiceInfo.cashierName}
        changeFun={(value: string) => updateInvoiceInfo("cashierName", value)}
      />
      <label
        htmlFor="customerName"
        className="col-start-2 row-start-1 text-sm font-bold md:text-base"
      >
        {t("invoice.customer")}:
      </label>

      <Input
        required={true}
        classes={"flex-1"}
        placeholder={"Customer name"}
        type={"text"}
        name={"customerName"}
        id={"customerName"}
        value={invoiceInfo.customerName}
        changeFun={(value: string) => updateInvoiceInfo("customerName", value)}
      />
    </div>
  );
};

export default Info;
