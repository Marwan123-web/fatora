import ItemRow from "./ItemRow";

const ItemsTable = ({ items }: { items: Array<any> }) => {
  return (
    <table className="w-full p-4 text-left">
      <thead>
        <tr className="border-b border-gray-900/10 text-sm md:text-base">
          <th>ITEM</th>
          <th>QTY</th>
          <th className="text-center">PRICE</th>
          <th className="text-center">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index: number) => (
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
