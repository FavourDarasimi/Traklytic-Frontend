import React from "react";
import { FiTarget } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const MonthlyBudget = () => {
  return (
    <div className="h-fit border-[1px] border-[#e6e6e6] shadow-xl bg-white p-4 md:p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-sm md:text-[15px] font-medium truncate">
          Monthly budget
        </h1>
        <FiTarget size={15} className="flex-shrink-0" />
      </div>
      <h1 className="text-xl md:text-[22px] font-bold mt-1 text-green-700">
        ₦500 / ₦1000
      </h1>
      <ProgressBar percent={50} single={true} />
      <h1 className="text-xs md:text-[13px] mt-1">₦500 remaining this month</h1>
    </div>
  );
};

export default MonthlyBudget;
