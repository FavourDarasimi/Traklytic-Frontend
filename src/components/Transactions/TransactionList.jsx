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
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
    },
    {
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
      isPrinting: false,
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

  const tabs = [
    { key: "all", label: "All" },
    { key: "income", label: "Income" },
    { key: "expenses", label: "Expenses" },
  ];

  const tabClass = (key) =>
    `pb-2 px-3 text-center cursor-pointer text-sm md:text-[15px] transition-colors ${
      isActive === key
        ? "border-b-[3px] font-semibold border-green-600 text-green-600"
        : "font-medium text-gray-400 border-b-[3px] border-transparent hover:text-gray-600"
    }`;

  return (
    <div className="border border-gray-200 rounded-xl mt-5 overflow-hidden bg-white">
      {/* Tabs */}
      <div className="flex gap-x-2 px-4 md:px-5 pt-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={tabClass(tab.key)}
            onClick={() => setIsActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Merchant",
                "Transaction Date",
                "Type",
                "Category",
                "Amount",
                "Actions",
              ].map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 md:px-6 py-3 md:py-4 text-left text-[11px] md:text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm md:text-[15px] font-medium text-gray-800">
                  {transaction.name}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 font-medium">
                  {transaction.date}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-700">
                  {transaction.type}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <span
                    className={`text-xs md:text-[13px] font-medium px-2.5 py-1 rounded-lg ${
                      transaction.category === "Salary"
                        ? "text-blue-600 bg-blue-50"
                        : "text-green-600 bg-green-50"
                    }`}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td
                  className={`px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm md:text-[14px] font-semibold flex items-center gap-x-1 ${
                    transaction.type === "Income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "Income" ? (
                    <MdAdd size={14} />
                  ) : (
                    <FaMinus size={12} />
                  )}
                  {transaction.amount}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <button className="flex justify-end w-full text-gray-400 hover:text-gray-700 transition-colors">
                    <BsThreeDotsVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
