import React from "react";
import { MdAdd, MdOutlineNotifications } from "react-icons/md";

const Header = ({ isMobile = false, onAddTransaction }) => {
  return (
    <div
      className={isMobile ? "flex gap-x-2 items-center" : "w-full md:w-auto"}
    >
      <div
        className={`flex ${isMobile ? "gap-x-2" : "gap-x-3 md:gap-x-7"} items-center ${isMobile ? "" : "flex-wrap justify-end "}`}
      >
        <div className="relative border-1 border-black rounded-full ">
          <MdOutlineNotifications
            className={`p-[2px] md:p-[5px] w-7 h-7 md:w-8 md:h-8 `}
          />
          <div className="w-[6px] h-[6px] bg-red-700 rounded-full absolute top-0 right-0 md:right-0.5 "></div>
        </div>
        <button
          onClick={onAddTransaction}
          aria-label="Add a new transaction"
          className={`bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white rounded-4xl hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500 whitespace-nowrap p-[4px] md:py-[10px] md:px-4 text-xs md:text-[14px] `}
        >
          <MdAdd className="w-6 h-6" />

          <span className="hidden md:block">Add Transaction</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
