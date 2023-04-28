import { useTranslation } from "react-i18next";

const Receipt = ({ invoice }: { invoice: any }) => {
  const { t } = useTranslation("common");

  return (
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
  );
};

export default Receipt;
