import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

const TransactionList = () => {
  const [isActive, setIsActive] = useState("all");
  const transactions = [
    {
      name: "Annette Block",
      date: "20 Feb 2025 AT 10:00 AM",
      type: "Income",
      amount: "$948.55",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Wade Warren",
      date: "10 May 2025 AT 10:00 PM",
      type: "Income",
      amount: "$328.85",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jacks Cooper",
      date: "20 Aug 2025 AT 03:00 AM",
      type: "Expense",
      amount: "$446.61",
      category: "Food",
      isPrinting: true,
    },
    {
      name: "Henry Roberts",
      date: "24 Jan 2025 AT 12:00 PM",
      type: "Income",
      amount: "$778.35",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Kristin Weston",
      date: "18 Dec 2025 AT 05:00 AM",
      type: "Expense",
      amount: "$302.87",
      category: "Food",
      isPrinting: true,
    },
    {
      name: "Bestie Cooper",
      date: "30 Sep 2025 AT 06:00 PM",
      type: "Income",
      amount: "$106.58",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Theresa Webb",
      date: "28 Mar 2025 AT 10:00 AM",
      type: "Expense",
      amount: "$219.78",
      category: "Food",
      isPrinting: true,
    },
    {
      name: "Ariene McCoy",
      date: "08 Nov 2025 AT 03:00 PM",
      type: "Expense",
      amount: "$105.55",
      category: "Food",
      isPrinting: true,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
  ];
  return (
    <div className="border-[1px] border-[#dedddb]  mt-5">
      <div className="flex gap-x-8 px-5 pt-5">
        <h1
          className={`pb-2 px-3 text-center cursor-pointer ${
            isActive == "all"
              ? "border-b-[3px] font-semibold border-green-600 text-green-600 transform duration-1000 ease-in-out"
              : "font-medium text-[#a1a1a1] border-b-[3px] border-[#f0f0f0]"
          }`}
          onClick={() => setIsActive("all")}
        >
          All
        </h1>
        <h1
          className={`pb-2 px-3 text-center cursor-pointer ${
            isActive == "income"
              ? "border-b-[3px] font-semibold border-green-600 text-green-600 transform duration-1000 ease-in-out"
              : "font-medium text-[#a1a1a1] border-b-[3px] border-[#f0f0f0]"
          }`}
          onClick={() => setIsActive("income")}
        >
          Income
        </h1>
        <h1
          className={`pb-2 px-3 text-center cursor-pointer ${
            isActive == "expenses"
              ? "border-b-[3px] font-semibold border-green-600 text-green-600 transform duration-1000 ease-in-out"
              : "font-medium text-[#a1a1a1] border-b-[3px] border-[#f0f0f0]"
          }`}
          onClick={() => setIsActive("expenses")}
        >
          Expenses
        </h1>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Merchant
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Transaction Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-xs font-medium text-[#a1a1a1] uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {transaction.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium ">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    <span
                      className={` w-fit p-[6px] rounded-lg ${
                        transaction.category == "Salary"
                          ? "text-blue-500 bg-blue-50"
                          : "text-green-500 bg-green-50"
                      }`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td
                    className={`flex gap-x-1 items-center px-6 py-4 whitespace-nowrap font-medium text-[14px] ${
                      transaction.type == "Income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type == "Income" ? <MdAdd /> : <FaMinus />}
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-">
                    <span className="flex justify-end">
                      <BsThreeDotsVertical />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
