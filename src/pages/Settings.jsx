import React from "react";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import Profile from "../components/Settings/Profile";
import BudgetSettings from "../components/Settings/BudgetSettings";

const Settings = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-x-1 font-semibold">
          <IoSettingsOutline size={25} />
          <h1 className="text-[25px]">Settings</h1>
        </div>
        <h1 className="text-[16px]">
          Manage your account preferences andd settings
        </h1>
      </div>
      <div className="mt-5 mx-[20%] space-y-10">
        <Profile />
        <BudgetSettings />
      </div>
    </div>
  );
};

export default Settings;
