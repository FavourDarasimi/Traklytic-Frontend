import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import Mark from "../assets/mark.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="lg:text-[30px] xs:text-[20px] font-bold relative p-3">
        Track<span className="text-green-600">lytic</span>
      </div>
      <div className="pt-20 pl-7">
        <ul className="flex flex-col space-y-10">
          <Link to="/dashboard/">
            <div className="flex gap-x-5 items-center text-[16px] font-semibold">
              <MdOutlineDashboard size={20} />
              <li>Dashboard</li>
            </div>
          </Link>
          <Link to="/transactions">
            <div className="flex gap-x-5 items-center text-[16px] font-semibold">
              <MdAccountBalanceWallet size={20} />
              <li>Transaction</li>
            </div>
          </Link>
          <div className="flex gap-x-5 items-center text-[16px] font-semibold">
            <GrTransaction size={20} />
            <li>Budget & Savings</li>
          </div>
          <div className="flex gap-x-5 items-center text-[16px] font-semibold">
            <IoStatsChart size={20} />
            <li>Statstics</li>
          </div>
          <Link to="/settings/">
            <div className="flex gap-x-5 items-center text-[16px] font-semibold">
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
