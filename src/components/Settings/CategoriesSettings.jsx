import React from "react";
import { FiPieChart } from "react-icons/fi";

const CategoriesSettings = () => {
  return (
    <div className="w-full ">
      <div className="flex gap-x-3 items-cente">
        <FiPieChart size={25} />
        <h1 className="text-[20px] font-medium">Default Expense Categories</h1>
      </div>
    </div>
  );
};

export default CategoriesSettings;
