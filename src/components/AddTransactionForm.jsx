import React, { useState } from "react";
import { X, Upload } from "lucide-react";

const AddTransactionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    party_name: "",
    amount: "",
    type: "expense",
    category: "",
    notes: "",
    receipt: null,
    transaction_date: new Date().toISOString().split("T")[0],
    add_savings: false,
    savings_percentage: "",
    recurring: false,
    savings_note: "",
  });

  const transactionTypes = [
    { value: "income", label: "Income" },
    { value: "expense", label: "Expense" },
  ];

  const categories = [
    { id: 1, name: "Groceries" },
    { id: 2, name: "Internet" },
    { id: 3, name: "Utilities" },
    { id: 4, name: "Transportation" },
    { id: 5, name: "Entertainment" },
    { id: 6, name: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      receipt: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // API call will go here
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 "
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Form Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 md:w-[400px]  bg-white z-50 transform transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b border-gray-200 z-10">
          <h2 className="text-[17px] md:text-[19px] font-semibold">
            Add Transaction
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close form"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Party Name */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Party Name (Optional)
            </label>
            <input
              type="text"
              name="party_name"
              value={formData.party_name}
              onChange={handleChange}
              placeholder="e.g., Vendor, Store Name"
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Amount *
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              required
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {transactionTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Transaction Date */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Date
            </label>
            <input
              type="date"
              name="transaction_date"
              value={formData.transaction_date}
              onChange={handleChange}
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any notes..."
              rows="3"
              className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
            />
          </div>

          {/* Receipt Upload */}
          <div>
            <label className="text-[14px] font-medium text-gray-600 mb-2 block">
              Receipt (Optional)
            </label>
            <label className="flex items-center justify-center w-full px-3 py-3 border h-[44px] border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <Upload size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">Upload file</span>
              </div>
              <input
                type="file"
                name="receipt"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
              />
            </label>
            {formData.receipt && (
              <p className="text-xs text-gray-600 mt-1">
                ✓ {formData.receipt.name}
              </p>
            )}
          </div>

          {/* Recurring Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="recurring"
              name="recurring"
              checked={formData.recurring}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-600 cursor-pointer"
            />
            <label
              htmlFor="recurring"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Mark as recurring
            </label>
          </div>

          {/* Add Savings Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="add_savings"
              name="add_savings"
              checked={formData.add_savings}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-600 cursor-pointer"
            />
            <label
              htmlFor="add_savings"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Add to savings
            </label>
          </div>

          {/* Savings Percentage (conditionally shown) */}
          {formData.add_savings && (
            <div>
              <label className="text-[14px] font-medium text-gray-600 mb-2 block">
                Savings Percentage (%)
              </label>
              <input
                type="number"
                name="savings_percentage"
                value={formData.savings_percentage}
                onChange={handleChange}
                placeholder="0"
                max="100"
                className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          )}

          {/* Savings Note (conditionally shown) */}
          {formData.add_savings && (
            <div>
              <label className="text-[14px] font-medium text-gray-600 mb-2 block">
                Savings Note (Optional)
              </label>
              <textarea
                name="savings_note"
                value={formData.savings_note}
                onChange={handleChange}
                placeholder="Why are you saving..."
                rows="2"
                className="w-full px-3 py-2 h-[44px] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors mt-6"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransactionForm;
