import React from "react";
import { MdAdd, MdOutlineNotifications } from "react-icons/md";
const Header = () => {
  return (
    <div className="">
      <div className="flex gap-x-7 items-center">
        <div className="relative">
          <MdOutlineNotifications className="w-8 h-8 border-1 border-black rounded-full p-[5px]" />
          <div className="w-[6px] h-[6px] bg-red-700 rounded-full absolute top-1 right-1"></div>
        </div>
        <button
          aria-label="Add a new transaction"
          className="bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[10px] px-4 rounded-4xl text-[14px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500"
        >
          <MdAdd className="w-5 h-5" />
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default Header;
