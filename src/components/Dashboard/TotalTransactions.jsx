import React from "react";
import { LuCreditCard } from "react-icons/lu";

const TotalTransactions = ({
  totalTransactionsCount = 0,
  weeklyTransactionsCount = 0,
}) => {
  return (
    <div className="border-[1px] border-[#e6e6e6] shadow-xl bg-white p-4 md:p-5 rounded-xl h-full w-full ">
      <div className="flex justify-between items-center">
        <h1 className="text-sm md:text-[15px] font-medium truncate">
          Total Transactions
        </h1>
        <LuCreditCard size={15} className="flex-shrink-0" />
      </div>
      <h1 className="text-xl md:text-[22px] font-bold mt-1 text-blue-600">
        {totalTransactionsCount.toLocaleString()}
      </h1>
      <h1 className="text-xs md:text-[13px] mt-1">
        {weeklyTransactionsCount.toLocaleString()} this week
      </h1>
    </div>
  );
};

export default TotalTransactions;
