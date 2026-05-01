import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaX } from "react-icons/fa6";

const TransactionFilters = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState({
    dateRange: "all",
    category: "all",
    type: "all",
    sortBy: "latest",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApply?.(filters);
    onClose?.();
  };

  const handleReset = () => {
    setFilters({
      dateRange: "all",
      category: "all",
      type: "all",
      sortBy: "latest",
    });
  };

  const filterOptions = {
    dateRange: [
      { value: "all", label: "All Time" },
      { value: "today", label: "Today" },
      { value: "week", label: "This Week" },
      { value: "month", label: "This Month" },
      { value: "year", label: "This Year" },
    ],
    category: [
      { value: "all", label: "All Categories" },
      { value: "salary", label: "Salary" },
      { value: "food", label: "Food & Dining" },
      { value: "transport", label: "Transportation" },
      { value: "entertainment", label: "Entertainment" },
      { value: "bills", label: "Bills" },
      { value: "shopping", label: "Shopping" },
    ],
    type: [
      { value: "all", label: "All Types" },
      { value: "income", label: "Income" },
      { value: "expense", label: "Expense" },
    ],
    sortBy: [
      { value: "latest", label: "Latest First" },
      { value: "oldest", label: "Oldest First" },
      { value: "highest", label: "Highest Amount" },
      { value: "lowest", label: "Lowest Amount" },
    ],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60]"
            style={{ pointerEvents: "auto" }}
          /> */}

          {/* Filter Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed  z-[70] md:absolute md:bottom-auto md:top-full right-0 md:left-auto  bg-white border border-gray-200 rounded-t-2xl md:rounded-2xl p-5 sm:p-6 w-[60%] md:w-[25%]  max-h-[90vh] overflow-y-auto md:max-h-none"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Filters
              </h3>
              {/* <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaX size={18} />
              </button> */}
              <h1 onClick={handleReset} className="text-green-600">
                Reset
              </h1>
            </div>

            {/* Filters */}
            <div className="space-y-4 sm:space-y-5">
              {/* Date Range */}
              {/* <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Date Range
                </label>
                <select
                  value={filters.dateRange}
                  onChange={(e) =>
                    handleFilterChange("dateRange", e.target.value)
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {filterOptions.dateRange.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Category */}
              {/* <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {filterOptions.category.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Type */}
              {/* <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {filterOptions.type.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Sort By */}
              {/* <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {filterOptions.sortBy.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div> */}

              <div>
                <h1 className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Transaction Type
                </h1>
                <div className="grid grid-flow-col auto-cols-[80px] gap-4 overflow-x-auto ">
                  {filterOptions.type.map((option) => (
                    <div
                      onClick={(e) => handleFilterChange("type", option.value)}
                      className={`${filters.type == option.value ? "border border-green-600 bg-green-600/5" : "border border-gray-400"} w-full  rounded-full p-2`}
                    >
                      {option.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6 sm:mt-8">
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-2 sm:py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-xs sm:text-sm transition-all"
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                className="flex-1 px-4 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-xs sm:text-sm transition-all"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TransactionFilters;
