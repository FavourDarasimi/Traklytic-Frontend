import React, { useState } from "react";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import Profile from "../components/Settings/Profile";
import BudgetSettings from "../components/Settings/BudgetSettings";
import CategoriesSettings from "../components/Settings/CategoriesSettings";
import { RiArrowRightSFill } from "react-icons/ri";

const Settings = () => {
  const [section, setSection] = useState("profile");
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-x-1 font-bold">
          <h1 className="text-[25px]">Settings</h1>
        </div>
        <h1 className="text-[16px]">
          Manage your account preferences andd settings
        </h1>
      </div>
      <div className="flex mt-10 mx-[10%] gap-x-10">
        <div className="w-[20%] pr-5 border-r-[1px] min-h-screen border-gray-200 space-y-6">
          {/* Profile */}
          <div className="flex items-center">
            <div className="w-6 flex justify-center">
              {section === "profile" && (
                <RiArrowRightSFill size={22} className="text-green-600" />
              )}
            </div>
            <h1
              className={`text-[16px]  cursor-pointer ${
                section === "profile" ? "font-semibold" : "text-gray-500"
              }`}
              onClick={() => setSection("profile")}
            >
              Profile
            </h1>
          </div>

          {/* Budget */}
          <div className="flex items-center">
            <div className="w-6">
              {section === "budget" && (
                <RiArrowRightSFill size={22} className="text-green-600" />
              )}
            </div>{" "}
            {/* empty placeholder for arrow */}
            <h1
              className={`text-[16px]  cursor-pointer ${
                section === "budget" ? "font-semibold" : "text-gray-500"
              }`}
              onClick={() => setSection("budget")}
            >
              Budget
            </h1>
          </div>

          {/* Categories */}
          <div className="flex items-center">
            <div className="w-6">
              {section === "categories" && (
                <RiArrowRightSFill size={22} className="text-green-600" />
              )}
            </div>{" "}
            {/* empty placeholder for arrow */}
            <h1
              className={`text-[16px]  cursor-pointer ${
                section === "categories" ? "font-semibold" : "text-gray-500"
              }`}
              onClick={() => setSection("categories")}
            >
              Categories
            </h1>
          </div>
        </div>
        <div className="w-[80%]  space-y-10 bg-white">
          {section === "profile" && <Profile />}
          {section === "budget" && <BudgetSettings />}
          {section === "categories" && <CategoriesSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
