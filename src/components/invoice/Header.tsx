import { useState } from "react";
import Input from "../Shared/Input";

const Header = () => {
  const date = new Date();
  const today = date.toLocaleDateString("en-EG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [invoiceNumber, setInvoiceNumber] = useState("1");
  const updateInvoiceNumber = (value: string) => {
    if (value! > "0") setInvoiceNumber(value);
  };
  return (
    <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
      <div className="flex space-x-2">
        <span className="font-bold">Current Date: </span>
        <span>{today}</span>
      </div>
      <div className="flex items-center space-x-2">
        <label className="font-bold" htmlFor="invoiceNumber">
          Invoice Number:
        </label>

        <Input
          required={true}
          classes={"max-w-[130px]"}
          type={"number"}
          name={"invoiceNumber"}
          id={"invoiceNumber"}
          value={invoiceNumber}
          changeFun={(value: string) => updateInvoiceNumber(value)}
          min={1}
          step={1}
        />
      </div>
    </div>
  );
};

export default Header;
