import { useTranslation } from "react-i18next";
import ItemRow from "./ItemRow";

const ItemsTable = ({ items }: { items: Array<any> }) => {
  const { t } = useTranslation("common");

  return (
    <table className="w-full p-4 text-left">
      <thead>
        <tr className="border-b border-gray-900/10 text-sm md:text-base">
          <th>{t("invoice.item")}</th>
          <th>{t("invoice.qty")}</th>
          <th className="text-center">{t("invoice.price")}</th>
          <th className="text-center">{t("invoice.action")}</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index: number) => (
          <ItemRow
            key={index}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
