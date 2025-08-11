import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { MdLocalGroceryStore, MdEmojiTransportation } from "react-icons/md";
import { FaCoins } from "react-icons/fa";

const LatestTransactionTable = () => {
  return (
    <div className="px-7 py-5  w-[100%] h-fit text-wrap rounded-xl bg-white border-[1px] border-[#e6e6e6] shadow-xl">
      <h1 className="text-[19px] font-semibold">Recents Transactions</h1>
      <div className="mt-5 space-y-5">
        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">Valerie</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Grocery
            </h1>
          </div>
          <h1 className="text-red-600 font-medium text-[18px]">-$100</h1>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">Microsoft</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Salary
            </h1>
          </div>
          <h1 className="text-green-600 font-medium text-[18px]">+$1000</h1>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">FUT Microfinance Bank</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Transportation
            </h1>
          </div>
          <h1 className="text-green-600 font-medium text-[18px]">-$100</h1>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">FUT Microfinance Bank</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Transportation
            </h1>
          </div>
          <h1 className="text-green-600 font-medium text-[18px]">-$100</h1>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">FUT Microfinance Bank</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Transportation
            </h1>
          </div>
          <h1 className="text-green-600 font-medium text-[18px]">-$100</h1>
        </div>

        <div className="flex justify-between items-center border-[1px] border-[#e6e6e6] p-3 rounded-xl">
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className="text-[16px] font-medium">FUT Microfinance Bank</h1>
              <h1 className="text-[13px] ">5:12pm</h1>
            </div>
            <h1 className="text-[12px]  bg-[#e6e6e6] px-2 py-[2px] rounded-xl">
              Transportation
            </h1>
          </div>
          <h1 className="text-green-600 font-medium text-[18px]">-$100</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestTransactionTable;
