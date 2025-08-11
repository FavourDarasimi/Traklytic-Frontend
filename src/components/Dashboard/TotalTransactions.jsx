import React from "react";
import { LuCreditCard } from "react-icons/lu";

const TotalTransactions = () => {
  return (
    <div className="border-[1px] border-[#e6e6e6] shadow-xl bg-white p-5 rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-[15px] font-medium">Total Transactions</h1>
        <LuCreditCard size={15} />
      </div>
      <h1 className="text-[22px] font-bold mt-1 text-blue-600">100</h1>
      <h1 className="text-[13px] mt-1">17 this week</h1>
    </div>
  );
};

export default TotalTransactions;
