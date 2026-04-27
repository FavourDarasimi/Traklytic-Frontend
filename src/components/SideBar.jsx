import React, { useState, useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import Mark from "../assets/mark.jpg";
import { Link } from "react-router-dom";

const SideBar = ({ isMobileDrawer = false }) => {
  const [active, setIsActive] = useState("dashboard");

  useEffect(() => {
    if (window.location.pathname == "/dashboard") {
      setIsActive("dashboard");
    } else if (window.location.pathname == "/transactions") {
      setIsActive("transactions");
    } else if (window.location.pathname == "/settings") {
      setIsActive("settings");
    }
  }, []);

  const switchTab = (tab) => {
    setIsActive(tab);
  };

  return (
    <div
      className={`bg-white flex flex-col ${!isMobileDrawer ? "h-screen" : "h-screen"}`}
    >
      {/* Logo - Only show on desktop */}
      {!isMobileDrawer && (
        <div className="text-lg md:text-xl lg:text-[28px] xl:text-[30px] font-bold relative pl-4 md:pl-6 xl:pl-8 pt-5">
          Track<span className="text-green-600">lytic</span>
        </div>
      )}

      {/* Navigation Menu - Grows to fill available space */}
      <div className={`md:pt-20 p-3 pt-10 flex-1`}>
        <ul className="flex flex-col space-y-3 md:space-y-5">
          <Link to="/dashboard/" onClick={() => switchTab("dashboard")}>
            <div
              className={`flex gap-x-3 md:gap-x-5 items-center text-sm md:text-base px-3 md:px-5 py-3 md:py-[14px] rounded-full transition-all duration-200 ${active == "dashboard" ? "bg-green-600 text-white shadow-3xl" : "bg-none hover:bg-gray-100"}`}
            >
              <MdOutlineDashboard size={20} className="flex-shrink-0" />
              <li className="truncate">Dashboard</li>
            </div>
          </Link>
          <Link to="/transactions" onClick={() => switchTab("transactions")}>
            <div
              className={`flex gap-x-3 md:gap-x-5 items-center text-sm md:text-base px-3 md:px-5 py-3 md:py-[14px] rounded-full transition-all duration-200 ${active == "transactions" ? "bg-green-600 text-white shadow-3xl" : "bg-none hover:bg-gray-100"}`}
            >
              <MdAccountBalanceWallet size={20} className="flex-shrink-0" />
              <li className="truncate">Transaction</li>
            </div>
          </Link>
          <div
            className={`flex gap-x-3 md:gap-x-5 items-center text-sm md:text-base px-3 md:px-5 py-3 md:py-[14px] rounded-full transition-all duration-200 cursor-not-allowed opacity-70 ${active == "" ? "bg-green-600 text-white shadow-3xl" : "bg-none hover:bg-gray-100"}`}
          >
            <GrTransaction size={20} className="flex-shrink-0" />
            <li className="truncate">Budget & Savings</li>
          </div>
          <div
            className={`flex gap-x-3 md:gap-x-5 items-center text-sm md:text-base px-3 md:px-5 py-3 md:py-[14px] rounded-full transition-all duration-200 cursor-not-allowed opacity-70 ${active == "" ? "bg-green-600 text-white shadow-3xl" : "bg-none hover:bg-gray-100"}`}
          >
            <IoStatsChart size={20} className="flex-shrink-0" />
            <li className="truncate">Statistics</li>
          </div>
          <Link to="/settings/" onClick={() => switchTab("settings")}>
            <div
              className={`flex gap-x-3 md:gap-x-5 items-center text-sm md:text-base px-3 md:px-5 py-3 md:py-[14px] rounded-full transition-all duration-200 ${active == "settings" ? "bg-green-600 text-white shadow-3xl" : "bg-none hover:bg-gray-100"}`}
            >
              <IoSettingsOutline size={20} className="flex-shrink-0" />
              <li className="truncate">Settings</li>
            </div>
          </Link>
        </ul>
      </div>

      {/* User Profile - Bottom */}
      <div className="mx-4 md:mx-[5%] pb-4  w-full">
        <div className="flex justify-between w-full items-center p-2 h-fit border-t-[1px] border-[#e6e6e6]">
          <div className="flex gap-x-2 md:gap-x-3 items-center min-w-0 flex-1">
            <img
              src={Mark}
              alt="Profile"
              className="rounded-full w-8 md:w-10 h-8 md:h-10 flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-xs md:text-[15px] font-medium truncate">
                Darasimi Olaniran
              </h1>
              <p className="text-[11px] md:text-[13px] truncate">
                kaiser25@gmail.com
              </p>
            </div>
          </div>
          <MdOutlineLogout size={20} className="flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
