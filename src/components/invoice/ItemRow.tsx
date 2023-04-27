import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../../redux-toolkit/invoice/slice";
import Button from "../Shared/Button";
import Input from "../Shared/Input";

const ItemRow = ({
  id,
  name,
  quantity,
  price,
}: {
  id: string;
  name: string;
  quantity: number;
  price: number;
}) => {
  const [itemField, setItemField] = useState({
    id: id,
    name: name,
    quantity: quantity,
    price: price,
  });

  const invoice = useSelector((state: any) => state.invoice);

  const dispatch = useDispatch();

  const updateItemField = (filedName: string, value: string) => {
    if ((filedName === "quantity" || filedName === "price") && value >= "0")
      setItemField({ ...itemField, [filedName]: value });
    else setItemField({ ...itemField, [filedName]: value });

    dispatch(editItem({ ...itemField, [filedName]: value } as any));
  };

  const deleteItemHandler = () => {
    dispatch(deleteItem(itemField as any));
  };
  return (
    <tr>
      <td className="w-full">
        <Input
          required={true}
          placeholder={"Item name"}
          type={"text"}
          name={"name"}
          id={"name"}
          value={itemField.name}
          changeFun={(value: string) => updateItemField("name", value)}
        />
      </td>
      <td className="min-w-[65px] md:min-w-[80px]">
        <Input
          required={true}
          placeholder={"Item qty"}
          type={"number"}
          name={"quantity"}
          id={"quantity"}
          value={itemField.quantity}
          min={0}
          step={1}
          changeFun={(value: string) => updateItemField("quantity", value)}
        />
      </td>
      <td className="relative min-w-[100px] md:min-w-[150px]">
        <Input
          required={true}
          placeholder={"Item price"}
          type={"number"}
          name={"price"}
          id={"price"}
          value={itemField.price}
          min={0}
          step={1}
          changeFun={(value: string) => updateItemField("price", value)}
        />
      </td>
      <td className="flex items-center justify-center">
        {invoice.items.length > 1 && (
          <Button
            classes={
              "rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
            }
            ButtonFun={deleteItemHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </Button>
        )}
      </td>
    </tr>
  );
};

export default ItemRow;
