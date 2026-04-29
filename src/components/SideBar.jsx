import React from "react";
import {
  MdOutlineDashboard,
  MdAccountBalanceWallet,
  MdOutlineLogout,
} from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline, IoStatsChart } from "react-icons/io5";
import Mark from "../assets/mark.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";

const SideBar = ({ isMobileDrawer = false }) => {
  const location = useLocation();

  const getActive = (pathname) => {
    if (pathname.startsWith("/dashboard")) return "dashboard";
    if (pathname.startsWith("/transactions")) return "transactions";
    if (pathname.startsWith("/settings")) return "settings";
    return "dashboard";
  };

  const active = getActive(location.pathname);

  const navItem = (isActive, disabled = false) =>
    `flex items-center gap-3 text-sm md:text-[15px] px-4 py-3 rounded-full transition-all duration-200 font-medium select-none ${
      disabled
        ? "cursor-not-allowed opacity-50"
        : isActive
          ? "bg-green-600 text-white shadow-md"
          : "hover:bg-gray-100 hover:text-black cursor-pointer text-gray-700"
    }`;

  return (
    <div className="bg-white flex flex-col h-screen w-full">
      {/* Logo */}
      {!isMobileDrawer && (
        <div className="flex items-center pl-5 xl:pl-7 pt-5 gap-3">
          <div className="w-7 sm:w-8 h-7 sm:h-8 md:w-9 md:h-9 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaChartLine className="text-white w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <h1 className="text-[22px] md:text-[26px] xl:text-[28px] font-bold">
            Track<span className="text-green-600">lytic</span>
          </h1>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`flex-1 p-3 overflow-y-auto ${
          isMobileDrawer ? "pt-4" : "pt-10"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/dashboard">
              <div className={navItem(active === "dashboard")}>
                <MdOutlineDashboard size={20} />
                <span className="text-[14px] md:text-[15px] truncate">
                  Dashboard
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/transactions">
              <div className={navItem(active === "transactions")}>
                <MdAccountBalanceWallet size={20} />
                <span className="text-[14px] md:text-[15px] truncate ">
                  Transactions
                </span>
              </div>
            </Link>
          </li>

          <li>
            <div className={navItem(false, true)}>
              <GrTransaction size={20} />
              <span className="text-[14px] md:text-[15px] truncate">
                Budget & Savings
              </span>
            </div>
          </li>

          <li>
            <div className={navItem(false, true)}>
              <IoStatsChart size={20} />
              <span className="text-[14px] md:text-[15px] truncate">
                Statistics
              </span>
            </div>
          </li>

          <li>
            <Link to="/settings">
              <div className={navItem(active === "settings")}>
                <IoSettingsOutline size={20} />
                <span className="text-[14px] md:text-[15px] truncate">
                  Settings
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Profile */}
      <div className="px-3 xl:px-1 2xl:px-3 pb-4">
        <div className="flex justify-between items-center p-3 border-t border-gray-200">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={Mark}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm md:text-[15px] font-semibold truncate">
                Jake Smith
              </p>
              <p className="text-[12px] text-gray-500 truncate">
                jake@gmail.com
              </p>
            </div>
          </div>

          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            aria-label="Log out"
          >
            <MdOutlineLogout size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
