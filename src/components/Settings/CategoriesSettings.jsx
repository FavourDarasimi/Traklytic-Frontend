import React, { useState } from "react";
import { FiPieChart } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import AddCategory from "./AddCategory";

const CategoriesSettings = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [categories, setCategories] = useState([
    { name: "Grocery", color: "#45ba12", type: "income" },
    { name: "Transport", color: "#3b82f6", type: "expense" },
    { name: "Utilities", color: "#f59e0b", type: "expense" },
    { name: "Dining", color: "#ef4444", type: "expense" },
    { name: "Salary", color: "#10b981", type: "income" },
  ]);

  return (
    <div className="w-full">
      {showCategory && <AddCategory setShowCategory={setShowCategory} />}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-[20px] md:text-[22px] font-semibold">
            Expense Categories
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage your expense categories and customize them.
          </p>
        </div>
        <button
          className="flex items-center gap-x-1.5 bg-green-600 text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap flex-shrink-0"
          onClick={() => setShowCategory(true)}
        >
          <IoAddOutline size={18} />
          Add Category
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Color swatch */}
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 border border-black/10"
                style={{ backgroundColor: category.color }}
              />
              <div className="min-w-0">
                <h2 className="text-sm md:text-[15px] font-semibold text-gray-800 truncate">
                  {category.name}
                </h2>
                <span
                  className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
                    category.type === "income"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {category.type}
                </span>
              </div>
            </div>
            <button
              className="text-red-400 hover:text-red-600 transition-colors flex-shrink-0 ml-2"
              aria-label={`Delete ${category.name}`}
            >
              <RiDeleteBinLine size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSettings;
