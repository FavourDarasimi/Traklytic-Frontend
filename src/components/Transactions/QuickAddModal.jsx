import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaX, FaPlus, FaMinus } from "react-icons/fa6";

const QuickAddModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "salary",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const categories = [
    "Salary",
    "Food",
    "Transport",
    "Entertainment",
    "Bills",
    "Shopping",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      amount: "",
      category: "salary",
      type: "expense",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    });
  };

  const handleClose = () => {
    resetForm();
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Add Transaction
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaX size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Type Selection */}
              <div className="grid grid-cols-2 gap-3">
                {["expense", "income"].map((type) => (
                  <motion.button
                    key={type}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type }))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      formData.type === type
                        ? type === "expense"
                          ? "bg-red-100 text-red-700 border-2 border-red-500"
                          : "bg-green-100 text-green-700 border-2 border-green-500"
                        : "bg-gray-100 text-gray-600 border-2 border-transparent"
                    }`}
                  >
                    {type === "expense" ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                    {type === "expense" ? "Expense" : "Income"}
                  </motion.button>
                ))}
              </div>

              {/* Merchant/Name */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Merchant / Description
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Grocery Store"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0"
                  required
                  step="0.01"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Add any notes..."
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm transition-all"
                >
                  Add Transaction
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickAddModal;
