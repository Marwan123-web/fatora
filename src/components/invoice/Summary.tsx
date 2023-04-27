import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotals, updateInvInfo } from "../../redux-toolkit/invoice/slice";
import Input from "../Shared/Input";

const Summary = () => {
  const invoice = useSelector((state: any) => state.invoice);
  const dispatch = useDispatch();
  const [invSummery, setInvSummery] = useState({
    taxRate: invoice.taxRate,
    discountRate: invoice.discountRate,
  });
  const updateInvSummery = (filedName: string, value: string) => {
    console.log([filedName], value);

    setInvSummery({ ...invSummery, [filedName]: value });
    dispatch(updateInvInfo({ ...invSummery, [filedName]: value } as any));
  };

  useEffect(() => {
    dispatch(calcTotals());
  }, [invoice, dispatch]);

  return (
    <div className="space-y-4 py-2">
      <div className="space-y-2">
        <label className="text-sm font-bold md:text-base" htmlFor="tax">
          Tax rate:
        </label>
        <div className="flex items-center">
          <Input
            classes={"w-full rounded-r-none bg-white shadow-sm"}
            type={"number"}
            name={"taxRate"}
            id={"taxRate"}
            min={0}
            step={1}
            placeholder={"0.0"}
            value={invoice.taxRate}
            changeFun={(value: string) => updateInvSummery("taxRate", value)}
          />
          <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
            %
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold md:text-base" htmlFor="discount">
          Discount rate:
        </label>
        <div className="flex items-center">
          <Input
            classes={"w-full rounded-r-none bg-white shadow-sm"}
            type={"number"}
            name={"discountRate"}
            id={"discountRate"}
            min={0}
            step={1}
            placeholder={"0.0"}
            value={invoice.discountRate}
            changeFun={(value: string) =>
              updateInvSummery("discountRate", value)
            }
          />
          <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
            %
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end space-y-2 pt-6">
        <div className="flex w-full justify-between">
          <span className="font-bold">Subtotal:</span>
          <span>£{invoice.subTotal.toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-bold">
            Discount ({invSummery.discountRate || "0"}%):
          </span>
          <span>£{parseFloat(invoice.discount).toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-bold">Tax ({invSummery.taxRate || "0"}%):</span>
          <span>£{parseFloat(invoice.tax).toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-between border-t border-gray-900/10 pt-2">
          <span className="font-bold">Total:</span>
          <span className="font-bold">
            £
            {invoice.total % 1 === 0 ? invoice.total : invoice.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
