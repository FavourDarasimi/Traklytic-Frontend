import React from "react";
import { FiTarget } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import Checkbox from "@mui/material/FormControlLabel";

const BudgetSettings = () => {
  return (
    <div className="w-full border-[1px] border-[#e6e6e6] shadow-xl bg-gradient-to-b from-white to-[#fafafa] p-5 rounded-xl">
      <div className="flex gap-x-3 items-center">
        <FiTarget size={25} />
        <h1 className="text-[20px] font-medium">Budget Settings</h1>
      </div>
      <div className="mx-14 mt-2 space-y-8">
        <div className="">
          <h1 className="text-[18px] font-medium">Budget Basics</h1>
          <div className="grid grid-cols-2 gap-x-7 mt-3 space-y-3">
            <div className="">
              <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                Peferred Currency
              </label>
              <select className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  ">
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                Budget Period
              </label>
              <select className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  ">
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                Budget Start Date
              </label>
              <input
                type="date"
                className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-medium">Spending Controls</h1>
          <div className="flex flex-col mt-3">
            <label htmlFor="input" className="font-medium pb-1 text-[15px]">
              Overall Spending Limit
            </label>
            <input
              type="number"
              className=" rounded-md p-2 w-[50%]  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
              placeholder=""
            />
          </div>
        </div>

        <div>
          <h1 className="text-[18px] font-medium">Alerts and Notifications</h1>
          <div className="flex flex-col mt-3">
            <label htmlFor="input" className="font-medium pb-1 text-[15px]">
              Alert Thresholds
            </label>
            <input
              type="number"
              className=" rounded-md p-2 w-[50%]  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
              placeholder=""
            />
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSettings;
