import React, { useState,useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import Mark from "../assets/mark.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [active,setIsActive] = useState("dashboard")

   useEffect(() => {
      if (window.location.pathname == "/dashboard") {
        setIsActive("dashboard");
      }
      else if (window.location.pathname == "/transactions") {
        setIsActive("transactions");
      }
      else if (window.location.pathname == "/settings") {
        setIsActive("settings");
      }
    }, []);

    const switchTab = (tab) => {
      setIsActive(tab)
    }

  return (
    <div className="bg-white min-h-screen">
      <div className="lg:text-[30px] xs:text-[20px] font-bold relative pl-8 pt-5">
        Track<span className="text-green-600">lytic</span>
      </div>
      <div className="pt-20 p-3">
        <ul className="flex flex-col space-y-5">
          <Link to="/dashboard/" onClick={() => switchTab("dashboard")}>
            <div className={`flex gap-x-5 items-center text-[16px] px-5 py-[14px] rounded-full  ${active == "dashboard"?"bg-green-600 text-white shadow-3xl":"bg-none"}`}>
              <MdOutlineDashboard size={20} />
              <li>Dashboard</li>
            </div>
          </Link>
          <Link to="/transactions" onClick={() => switchTab("transactions")}>
            <div className={`flex gap-x-5 items-center text-[16px] px-5 py-[14px] rounded-full  ${active == "transactions"?"bg-green-600 text-white shadow-3xl":"bg-none"}`}>
              <MdAccountBalanceWallet size={20} />
              <li>Transaction</li>
            </div>
          </Link>
          <div className={`flex gap-x-5 items-center text-[16px] px-5 py-[14px] rounded-full  ${active == ""?"bg-green-600 text-white shadow-3xl":"bg-none"}`}>
            <GrTransaction size={20} />
            <li>Budget & Savings</li>
          </div>
          <div className={`flex gap-x-5 items-center text-[16px] px-5 py-[14px] rounded-full  ${active == ""?"bg-green-600 text-white shadow-3xl":"bg-none"}`}>
            <IoStatsChart size={20} />
            <li>Statstics</li>
          </div>
          <Link to="/settings/" onClick={() => switchTab("settings")}>
            <div className={`flex gap-x-5 items-center text-[16px] px-5 py-[14px] rounded-full  ${active == "settings"?"bg-green-600 text-white shadow-3xl":"bg-none"}`}>
              <IoSettingsOutline size={20} />
              <li>Settings</li>
            </div>
          </Link>
        </ul>
      </div>
      <div className="mx-[5%] ">
        <div className=" absolute bottom-0 mb-5 flex justify-between w-[90%] items-center ] p-2  h-fit border-t-[1px] border-[#e6e6e6]">
          <div className="flex gap-x-3 items-center">
            <img src={Mark} alt="Profile" className="rounded-full w-10 h-10" />
            <div>
              <h1 className="text-[15px] font-medium">Darasimi Olaniran</h1>
              <p className="text-[13px]">kaiser25@gmail.com</p>
            </div>
          </div>
          <MdOutlineLogout size={20} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
