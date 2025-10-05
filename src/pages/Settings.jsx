import React, { useState } from "react";
import { IoAddOutline, IoSettingsOutline } from "react-icons/io5";
import Profile from "../components/Settings/Profile";
import BudgetSettings from "../components/Settings/BudgetSettings";
import CategoriesSettings from "../components/Settings/CategoriesSettings";
import { RiArrowRightSFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FiPieChart } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import SettingSections from "../components/Settings/SettingSections";

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
          <SettingSections
            section_name="profile"
            title="Profile"
            section={section}
            setSection={setSection}
          />

          {/* Categories */}
          <SettingSections
            section_name="categories"
            title="Categories"
            section={section}
            setSection={setSection}
          />

          {/* Budget */}
          <SettingSections
            section_name="budget"
            title="Budget"
            section={section}
            setSection={setSection}
          />

          {/* Notifications */}
          <SettingSections
            section_name="notifications"
            title="Notifications"
            section={section}
            setSection={setSection}
          />

          {/* Reports & Export */}
          <SettingSections
            section_name="reports-export"
            title="Reports & Export"
            section={section}
            setSection={setSection}
          />

          {/* Appearance */}
          <SettingSections
            section_name="appearance"
            title="Appearance"
            section={section}
            setSection={setSection}
          />

          {/* Help & Support */}
          <SettingSections
            section_name="help-support"
            title="Help & Support"
            section={section}
            setSection={setSection}
          />
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
