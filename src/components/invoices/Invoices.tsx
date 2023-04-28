import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Invoices = () => {
  const invoices = useSelector((state: any) => state.invoices);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              cashierName
            </th>
            <th scope="col" className="px-6 py-3">
              customerName
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              items
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              total
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice: any, index: number) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th className="px-6 py-4 text-center">{invoice.invoiceNumber}</th>
              <th className="px-6 py-4">{invoice.cashierName}</th>
              <th className="px-6 py-4">{invoice.customerName}</th>
              <td className="px-6 py-4 text-center">{invoice.items.length}</td>
              <td className="px-6 py-4 text-center">{invoice.total}</td>
              <td>
                <Link
                  to={invoice.invoiceNumber}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  VIEW
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
