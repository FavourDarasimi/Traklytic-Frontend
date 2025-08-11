import React from "react";
import ProgressBar from "./ProgressBar";
const ExpenseDistribution = () => {
  return (
    <div className=" space-y-7 rounded-xl border-[1px] border-[#e6e6e6] shadow-xl p-5 bg-white h-fit">
      <h1 className="text-[19px] font-medium">Where your money go?</h1>

      <div>
        <div className="flex justify-between">
          <h1 className="text-[15px] font-medium">Transportation</h1>
          <h1 className="text-[15px] font-medium">$20</h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={20} />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[15px] font-medium">Food</h1>
          <h1 className="text-[15px] font-medium">$50</h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={50} />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[15px] font-medium">Shopping</h1>
          <h1 className="text-[15px] font-medium">$30</h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[15px] font-medium">Shopping</h1>
          <h1 className="text-[15px] font-medium">$30</h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[15px] font-medium">Shopping</h1>
          <h1 className="text-[15px] font-medium">$30</h1>
        </div>
        <div className="mt-2">
          <ProgressBar percent={30} single={false} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseDistribution;
