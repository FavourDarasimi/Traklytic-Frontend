import React from "react";
import ProgressBar from "./ProgressBar";
const ExpenseDistribution = () => {
  return (
    <div className="space-y-4 md:space-y-7 rounded-xl border-[1px] border-[#e6e6e6] shadow-xl p-4 md:p-5 bg-white h-fit">
      <h1 className="text-base md:text-[19px] font-medium">
        Where your money go?
      </h1>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-[15px] font-medium truncate">
            Transportation
          </h1>
          <h1 className="text-sm md:text-[15px] font-medium flex-shrink-0">
            ₦20
          </h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={20} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-[15px] font-medium truncate">Food</h1>
          <h1 className="text-sm md:text-[15px] font-medium flex-shrink-0">
            ₦50
          </h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={50} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-[15px] font-medium truncate">
            Shopping
          </h1>
          <h1 className="text-sm md:text-[15px] font-medium flex-shrink-0">
            ₦30
          </h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-[15px] font-medium truncate">
            Shopping
          </h1>
          <h1 className="text-sm md:text-[15px] font-medium flex-shrink-0">
            ₦30
          </h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-[15px] font-medium truncate">
            Shopping
          </h1>
          <h1 className="text-sm md:text-[15px] font-medium flex-shrink-0">
            ₦30
          </h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseDistribution;
