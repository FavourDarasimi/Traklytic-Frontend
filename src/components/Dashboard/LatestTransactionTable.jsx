import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { MdLocalGroceryStore, MdEmojiTransportation } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

const LatestTransactionTable = () => {
  const transactionData = [
    {
      name: "Savings",
      date_time: "September 6, 2025 12:21PM",
      amount: 1500,
      type: "credit",
    },
    {
      name: "Savings",
      date_time: "September 6, 2025 12:21PM",
      amount: 1500,
      type: "debit",
    },
    {
      name: "Savings",
      date_time: "September 6, 2025 12:21PM",
      amount: 1500,
      type: "debit",
    },
    {
      name: "Savings",
      date_time: "September 6, 2025 12:21PM",
      amount: 1500,
      type: "debit",
    },
    {
      name: "Savings",
      date_time: "September 6, 2025 12:21PM",
      amount: 1500,
      type: "credit",
    },
  ];
  const getTypeColor = (type) => {
    if (type == "debit") {
      return "bg-red-600";
    } else if (type == "credit") {
      return "bg-green-600";
    }
  };
  return (
    <div className="px-4 md:px-6 py-4 md:py-5 w-full h-fit rounded-xl bg-white border border-[#e6e6e6] shadow-xl">
      <h1 className="text-base md:text-[19px] font-semibold">
        Recent Transactions
      </h1>
      <div className="border-t border-gray-200 my-3" />
      <div className="space-y-4 md:space-y-5">
        {transactionData.map((transaction, idx) => (
          <div key={idx} className="flex justify-between items-center gap-2">
            <div className="flex gap-3 items-center min-w-0">
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${getTypeColor(transaction.type)}`}
              />
              <div className="min-w-0">
                <p className="text-sm md:text-[16px] font-semibold truncate">
                  {transaction.name}
                </p>
                <p className="text-[11px] md:text-[13px] text-gray-500 font-medium truncate">
                  {transaction.date_time}
                </p>
              </div>
            </div>
            <div className="flex items-center font-semibold gap-0.5 flex-shrink-0">
              <span className="text-sm md:text-[17px] whitespace-nowrap">
                {transaction.type === "debit" ? "-" : "+"}₦{transaction.amount}
              </span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTransactionTable;
