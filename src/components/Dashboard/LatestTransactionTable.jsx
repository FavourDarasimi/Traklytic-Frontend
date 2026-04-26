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
    <div className="px-4 md:px-7 py-4 md:py-5 w-full h-fit text-wrap rounded-xl bg-white border-[1px] border-[#e6e6e6] shadow-xl">
      <h1 className="text-base md:text-[19px] font-semibold">
        Recent Transactions
      </h1>
      <div className="border-t border-t-[#dedddb] my-3" />
      <div className="space-y-5">
        {transactionData.map((transaction) => (
          <div className="flex justify-between items-center">
            <div className="flex gap-[14px] items-center">
              <div
                className={`w-3 h-3 rounded-full ${getTypeColor(transaction.type)}`}
              />
              <div>
                <h1 className="text-[17px] font-semibold">
                  {transaction.name}
                </h1>
                <h3 className="text-[13px] text-gray-600 font-medium">
                  {transaction.date_time}
                </h3>
              </div>
            </div>
            <div className="flex items-center font-semibold gap-1 ">
              <h1 className="text-[19px]">
                {transaction.type == "debit" ? "-" : "+"}₦{transaction.amount}
              </h1>
              <ChevronRight className="hover:underline hover:animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTransactionTable;
