import { useState } from "react";
import Input from "../Shared/Input";

const Info = () => {
  const [invoiceInfo, setInvoiceInfo] = useState({
    cashierName: "",
    customerName: "",
  });
  const updateInvoiceInfo = (filedName: string, value: string) => {
    setInvoiceInfo({ ...invoiceInfo, [filedName]: value });
  };
  return (
    <div className="grid grid-cols-2 gap-2 pt-4 pb-8">
      <label htmlFor="cashierName" className="text-sm font-bold sm:text-base">
        Cashier:
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
        Customer:
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
