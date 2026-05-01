import React, { useState } from "react";
import { FaSliders, FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const TransactionHeader = ({ onAddClick, onFilterClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* Title Section */}
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900">
          Transactions
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Track and manage all your income and expenses
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex  gap-3 sm:gap-4 items-stretch sm:items-center">
        {/* Search Bar */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>

        {/* Filter Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onFilterClick}
          className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg hover:border-green-200 hover:bg-green-50 transition-all font-medium text-xs sm:text-sm"
        >
          <FaSliders size={14} />
          <span className="hidden sm:inline">Filters</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TransactionHeader;
