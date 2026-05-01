import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEllipsis,
  FaPencil,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

const TransactionTableView = ({ transactions = [], isLoading = false }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  const getCategoryColor = (category) => {
    const colors = {
      salary: { bg: "bg-blue-50", text: "text-blue-600" },
      food: { bg: "bg-orange-50", text: "text-orange-600" },
      transport: { bg: "bg-purple-50", text: "text-purple-600" },
      entertainment: { bg: "bg-pink-50", text: "text-pink-600" },
      bills: { bg: "bg-yellow-50", text: "text-yellow-600" },
      shopping: { bg: "bg-indigo-50", text: "text-indigo-600" },
    };
    return colors[category?.toLowerCase()] || colors.salary;
  };

  // Desktop Table View
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-xl bg-white">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Merchant
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((transaction, idx) => (
            <motion.tr
              key={idx}
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(null)}
              className=""
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm font-medium text-gray-900">
                  {transaction.name}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-3 py-1 rounded-lg text-xs font-medium text-gray-900 bg-gray-100">
                  {transaction.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium text-gray-900 bg-gray-100">
                  {transaction.type === "Income" ? (
                    <FaPlus size={12} />
                  ) : (
                    <FaMinus size={12} />
                  )}
                  {transaction.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p
                  className={`text-sm font-semibold ${
                    transaction.type === "Income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "Income" ? "+" : "-"}
                  {transaction.amount}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <motion.div className="flex gap-2">
                  <button className="p-2  text-gray-600 rounded-lg hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                    <FaPencil size={14} />
                  </button>
                  <button className="p-2  text-gray-600 rounded-lg hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                    <FaTrash size={14} />
                  </button>
                </motion.div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Mobile Card View
  const MobileCards = () => (
    <div className="md:hidden space-y-3">
      {transactions.map((transaction, idx) => (
        <motion.div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg p-4 space-y-3"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {transaction.name}
              </p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-bold ${
                  transaction.type === "Income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "Income" ? "+" : "-"}
                {transaction.amount}
              </p>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium mt-1 text-gray-900 bg-gray-100">
                {transaction.type === "Income" ? (
                  <FaPlus size={10} />
                ) : (
                  <FaMinus size={10} />
                )}
                {transaction.type}
              </span>
            </div>
          </div>

          {/* Category and Actions */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="inline-flex px-2 py-1 rounded text-xs font-medium text-gray-900 bg-gray-100">
              {transaction.category}
            </span>
            <div className="relative">
              <button
                onClick={() =>
                  setShowMobileMenu(showMobileMenu === idx ? null : idx)
                }
                className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors"
              >
                <FaEllipsis size={14} />
              </button>
              {showMobileMenu === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <button className="w-full px-4 py-2 text-left text-xs text-gray-600 hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
                    <FaPencil size={12} /> Edit
                  </button>
                  <button className="w-full px-4 py-2 text-left text-xs text-gray-600 hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap">
                    <FaTrash size={12} /> Delete
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded w-full"></div>
              <div className="h-3 bg-gray-100 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <DesktopTable />
      <MobileCards />
    </>
  );
};

export default TransactionTableView;
