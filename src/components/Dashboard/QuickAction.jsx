import React from "react";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";

const QuickAction = () => {
  return (
    <div className="bg-white w-full rounded-xl border-[1px] border-[#e6e6e6] shadow-xl p-5">
      <h1 className="text-[19px] font-medium">Quick Actions</h1>
      <div className="mt-5 space-y-4">
        <button className="flex items-center gap-x-3 px-4 py-2 bg-green-700 text-white rounded hover:bg-white border-[1px] hover:border-green-600 hover:text-green-600 transition-colors duration-500 w-full text-[15px] cursor-pointer">
          <IoAddOutline size={20} />
          Add Expense
        </button>
        <div>
          <button className="flex items-center gap-x-3 px-4 py-2 border-[1px] border-[#e6e6e6]  rounded  w-full text-[15px] hover:bg-gray-100 cursor-pointer">
            <LuCreditCard size={20} /> Add Income
          </button>
        </div>
        <div>
          <button className="flex items-center gap-x-3 px-4 py-2 border-[1px] border-[#e6e6e6]  rounded  w-full text-[15px] hover:bg-gray-100 cursor-pointer">
            <MdOutlineFileDownload size={20} /> Export Data
          </button>
        </div>
        <div>
          <button className="flex items-center gap-x-3 px-4 py-2 border-[1px] border-[#e6e6e6]  rounded  w-full text-[15px] hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={20} />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickAction;
