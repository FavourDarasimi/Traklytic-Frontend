import React from "react";
import { FiTarget } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const MonthlyBudget = ({ monthlyIncome = 0, monthlyExpenses = 0 }) => {
  const expensePercent =
    monthlyIncome > 0
      ? Math.min(100, Math.round((monthlyExpenses / monthlyIncome) * 100))
      : 0;
  const remaining = Math.max(0, monthlyIncome - monthlyExpenses);

  return (
    <div className="h-full w-full  border-[1px] border-[#e6e6e6] shadow-xl bg-white p-4 md:p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-sm md:text-[15px] font-medium truncate">
          Monthly budget
        </h1>
        <FiTarget size={15} className="flex-shrink-0" />
      </div>
      <h1 className="text-xl md:text-[22px] font-bold mt-1 text-green-700">
        ₦{monthlyExpenses.toLocaleString()} / ₦{monthlyIncome.toLocaleString()}
      </h1>
      <ProgressBar percent={expensePercent} single={true} />
      <h1 className="text-xs md:text-[13px] mt-1">
        {monthlyIncome > 0
          ? `₦${remaining.toLocaleString()} remaining this month`
          : "No income data available"}
      </h1>
    </div>
  );
};

export default MonthlyBudget;
