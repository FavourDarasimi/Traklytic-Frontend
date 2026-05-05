import React, { useMemo, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Profile from "../components/Settings/Profile";
import BudgetSettings from "../components/Settings/BudgetSettings";
import CategoriesSettings from "../components/Settings/CategoriesSettings";
import SettingSections from "../components/Settings/SettingSections";

const sectionItems = [
  { key: "profile", label: "Profile" },
  { key: "categories", label: "Categories" },
  { key: "budget", label: "Budget" },
  { key: "notifications", label: "Notifications" },
  { key: "reports-export", label: "Reports & Export" },
  { key: "appearance", label: "Appearance" },
  { key: "help-support", label: "Help & Support" },
];

const SectionPlaceholder = ({ title, description }) => (
  <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    <div className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-gray-700">
      This section is available in future updates.
    </div>
  </div>
);

const Settings = () => {
  const { user } = useAuth();
  const [section, setSection] = useState("profile");

  const displayName = useMemo(() => {
    if (!user) return "Tracklytic user";
    return (
      `${user.first_name || ""} ${user.last_name || ""}`.trim() ||
      user.email ||
      "Tracklytic user"
    );
  }, [user]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[22px] md:text-[25px] font-bold">Settings</h1>
        <p className="text-sm md:text-[15px] text-gray-500 mt-1">
          Manage your account preferences, budgeting options, and profile
          details.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Signed in as{" "}
          <span className="font-medium text-gray-800">{displayName}</span>.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-6 md:gap-8 xl:gap-10">
        <div className="w-full md:w-[22%] lg:w-[18%] md:pr-5 md:border-r border-gray-200 space-y-4 md:space-y-6 flex-shrink-0">
          {sectionItems.map(({ key, label }) => (
            <SettingSections
              key={key}
              section_name={key}
              title={label}
              section={section}
              setSection={setSection}
            />
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
            {section === "profile" && <Profile user={user} />}
            {section === "budget" && <BudgetSettings />}
            {section === "categories" && <CategoriesSettings />}
            {section === "notifications" && (
              <SectionPlaceholder
                title="Notifications"
                description="Control how you receive alerts and reminders about budgets and transactions."
              />
            )}
            {section === "reports-export" && (
              <SectionPlaceholder
                title="Reports & Export"
                description="Export your data and generate reports to track spending performance."
              />
            )}
            {section === "appearance" && (
              <SectionPlaceholder
                title="Appearance"
                description="Choose your preferred theme and layout settings for the dashboard."
              />
            )}
            {section === "help-support" && (
              <SectionPlaceholder
                title="Help & Support"
                description="Get help, access product guides, and contact support for account issues."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
