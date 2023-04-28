import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateInvInfo } from "../../redux-toolkit/invoice/slice";
import Input from "../Shared/Input";

const Header = () => {
  const dispatch = useDispatch();
  const invoice = useSelector((state: any) => state.invoice);

  const date = new Date();
  const today = date.toLocaleDateString("en-EG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const { t } = useTranslation("common");

  const [invoiceNumber, setInvoiceNumber] = useState(invoice.invoiceNumber);
  const updateInvoiceNumber = (value: string) => {
    if (value >= "0") {
      setInvoiceNumber(value);
      dispatch(updateInvInfo({ invoiceNumber: value } as any));
    }
  };
  return (
    <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
      <div className="flex space-x-2">
        <span className="font-bold">{t("invoice.currentDate")}: </span>
        <span>{today}</span>
      </div>
      <div className="flex items-center space-x-2">
        <label className="font-bold" htmlFor="invoiceNumber">
          {t("invoice.invoiceNumbe")}:
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
