import React, { useState } from "react";
import Profile from "../components/Settings/Profile";
import BudgetSettings from "../components/Settings/BudgetSettings";
import CategoriesSettings from "../components/Settings/CategoriesSettings";
import SettingSections from "../components/Settings/SettingSections";

const Settings = () => {
  const [section, setSection] = useState("profile");

  return (
    <div className="w-full">
      {/* Page Header */}
      <div>
        <h1 className="text-[22px] md:text-[25px] font-bold">Settings</h1>
        <p className="text-sm md:text-[15px] text-gray-500 mt-0.5">
          Manage your account preferences and settings
        </p>
      </div>

      {/* Settings Layout */}
      <div className="flex flex-col md:flex-row mt-8 gap-6 md:gap-8 xl:gap-10">
        {/* Sidebar Nav */}
        <div className="w-full md:w-[22%] lg:w-[18%] md:pr-5 md:border-r border-gray-200 space-y-4 md:space-y-6 flex-shrink-0">
          {[
            { key: "profile", label: "Profile" },
            { key: "categories", label: "Categories" },
            { key: "budget", label: "Budget" },
            { key: "notifications", label: "Notifications" },
            { key: "reports-export", label: "Reports & Export" },
            { key: "appearance", label: "Appearance" },
            { key: "help-support", label: "Help & Support" },
          ].map(({ key, label }) => (
            <SettingSections
              key={key}
              section_name={key}
              title={label}
              section={section}
              setSection={setSection}
            />
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 bg-white">
          {section === "profile" && <Profile />}
          {section === "budget" && <BudgetSettings />}
          {section === "categories" && <CategoriesSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
