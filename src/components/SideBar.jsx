import React, { useState, useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import Mark from "../assets/mark.jpg";
import { Link, useLocation } from "react-router-dom";

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
    `flex gap-x-3 items-center text-sm px-3 py-3 rounded-full transition-all duration-200 ${
      disabled
        ? "cursor-not-allowed opacity-50 hover:bg-transparent"
        : isActive
          ? "bg-green-600 text-white shadow-md"
          : "hover:bg-gray-100 cursor-pointer"
    }`;

  return (
    <div className="bg-white flex flex-col h-screen">
      {/* Logo — only on desktop sidebar */}
      {!isMobileDrawer && (
        <div className="text-[26px] xl:text-[28px] font-bold pl-5 xl:pl-7 pt-5">
          Track<span className="text-green-600">lytic</span>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`flex-1 p-3 overflow-y-auto ${
          isMobileDrawer ? "pt-4" : "pt-10"
        }`}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <Link to="/dashboard" onClick={() => {}}>
              <div className={navItem(active === "dashboard")}>
                <MdOutlineDashboard size={20} className="flex-shrink-0" />
                <span className="truncate">Dashboard</span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/transactions" onClick={() => {}}>
              <div className={navItem(active === "transactions")}>
                <MdAccountBalanceWallet size={20} className="flex-shrink-0" />
                <span className="truncate">Transactions</span>
              </div>
            </Link>
          </li>

          <li>
            <div className={navItem(false, true)}>
              <GrTransaction size={20} className="flex-shrink-0" />
              <span className="truncate">Budget &amp; Savings</span>
            </div>
          </li>

          <li>
            <div className={navItem(false, true)}>
              <IoStatsChart size={20} className="flex-shrink-0" />
              <span className="truncate">Statistics</span>
            </div>
          </li>

          <li>
            <Link to="/settings" onClick={() => {}}>
              <div className={navItem(active === "settings")}>
                <IoSettingsOutline size={20} className="flex-shrink-0" />
                <span className="truncate">Settings</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Profile — Bottom */}
      <div className="px-3 pb-4">
        <div className="flex justify-between items-center p-2 border-t border-gray-200">
          <div className="flex gap-x-2 items-center min-w-0 flex-1">
            <img
              src={Mark}
              alt="Profile"
              className="rounded-full w-9 h-9 flex-shrink-0 object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">Jake Smith</p>
              <p className="text-[12px] text-gray-500 truncate">
                jake@gmail.com
              </p>
            </div>
          </div>
          <button
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer flex-shrink-0"
            aria-label="Log out"
            title="Log out"
          >
            <MdOutlineLogout size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
