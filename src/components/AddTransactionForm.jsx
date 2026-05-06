import React, { useEffect, useState } from "react";
import { X, Upload } from "lucide-react";
import * as transactionService from "../services/api/transactionService";

const AddTransactionForm = ({ isOpen, onClose, onSubmit, categories = [] }) => {
  const [formData, setFormData] = useState({
    party_name: "",
    amount: "",
    type: "Income",
    category: "",
    notes: "",
    receipt: null,
    transaction_date: new Date().toISOString().split("T")[0],
    add_savings: false,
    savings_percentage: "",
    recurring: false,
    savings_note: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [receiptParsing, setReceiptParsing] = useState(false);
  const [receiptParseError, setReceiptParseError] = useState("");

  const transactionTypes = [
    { value: "Income", label: "Income" },
    { value: "Expense", label: "Expense" },
  ];

  const availableCategories = categories;

  useEffect(() => {
    if (!isOpen) return;
    setFormError("");
    setSubmitting(false);
    setReceiptParsing(false);
    setReceiptParseError("");
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      receipt: file,
    }));

    // Reset previous states
    setReceiptParseError("");
    setReceiptParsing(true);

    // Create FormData for receipt parsing
    const formData = new FormData();
    formData.append("receipt", file);

    try {
      // Call the parse receipt endpoint
      const extractedData = await transactionService.uploadReceipt(formData);

      // Populate form with extracted data
      setFormData((prev) => ({
        ...prev,
        party_name: extractedData.party_name || prev.party_name,
        amount: extractedData.amount || prev.amount,
        type: extractedData.type || prev.type,
        category: extractedData.category || prev.category,
        notes: extractedData.notes || prev.notes,
        transaction_date:
          extractedData.transaction_date || prev.transaction_date,
      }));
    } catch (error) {
      console.error("Failed to parse receipt:", error);
      setReceiptParseError("Parsing not available right now");
    } finally {
      setReceiptParsing(false);
    }
  };

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      let payload;

      // Normalize values FIRST
      const normalizedData = {
        ...formData,
        amount: formData.amount ? Number(formData.amount) : null,
        category: formData.category ? Number(formData.category) : null,
        savings_percentage: formData.savings_percentage
          ? Number(formData.savings_percentage)
          : null,
      };

      if (formData.receipt) {
        payload = new FormData();

        Object.entries(normalizedData).forEach(([key, value]) => {
          if (key === "receipt") {
            if (value) payload.append("receipt", value);
            return;
          }

          // 🚨 IMPORTANT: skip empty values
          if (value !== null && value !== "" && value !== undefined) {
            payload.append(key, value);
          }
        });
      } else {
        payload = normalizedData;
      }

      const created = await transactionService.addTransaction(payload);

      // ✅ Update parent (MainLayout or wherever)
      if (onSubmit) {
        onSubmit(created);
      }

      // Reset form
      setFormData({
        party_name: "",
        amount: "",
        type: "Income",
        category: "",
        notes: "",
        receipt: null,
        transaction_date: new Date().toISOString().split("T")[0],
        add_savings: false,
        savings_percentage: "",
        recurring: false,
        savings_note: "",
      });

      onClose();
    } catch (error) {
      console.log(error);
      setFormError(error?.message || "Unable to save transaction.");
    } finally {
      setSubmitting(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormError("");
  //   setSubmitting(true);

  //   try {
  //     let payload;
  //     if (formData.receipt) {
  //       payload = new FormData();
  //       Object.entries(formData).forEach(([key, value]) => {
  //         if (key === "receipt") {
  //           if (value) payload.append("receipt", value);
  //           return;
  //         }
  //         if (value !== null && value !== undefined) {
  //           payload.append(key, value);
  //         }
  //       });
  //     } else {
  //       payload = {
  //         ...formData,
  //         amount: formData.amount === "" ? null : Number(formData.amount),
  //       };
  //     }

  //     await handleAddTransaction(payload);
  //     setFormData({
  //       party_name: "",
  //       amount: "",
  //       type: "Income",
  //       category: "",
  //       notes: "",
  //       receipt: null,
  //       transaction_date: new Date().toISOString().split("T")[0],
  //       add_savings: false,
  //       savings_percentage: "",
  //       recurring: false,
  //       savings_note: "",
  //     });
  //     onClose();
  //   } catch (error) {
  //     setFormError(error?.message || "Unable to add transaction.");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[50] "
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Form Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 md:w-[400px]  bg-white z-[60] transform transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${
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
        <form className="p-4 space-y-4">
          {formError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {formError}
            </div>
          )}
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
              {availableCategories.map((cat) => (
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

            {/* Loading Progress */}
            {receiptParsing && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full animate-pulse w-full"></div>
                  </div>
                  <span className="text-xs text-gray-600">Parsing...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {receiptParseError && (
              <div className="mt-2 rounded-lg border border-red-200 bg-red-50 p-2">
                <p className="text-xs text-red-700">{receiptParseError}</p>
              </div>
            )}

            {/* File Name */}
            {formData.receipt && !receiptParsing && (
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
            onClick={handleAddTransaction}
            disabled={submitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors mt-6 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Saving..." : "Add Transaction"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransactionForm;
