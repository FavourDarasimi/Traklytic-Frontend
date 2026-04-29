import React from "react";

// Helper to format currency values
export const formatCurrency = (amount, currency = "₦") => {
  return `${currency}${typeof amount === "number" ? amount.toLocaleString() : amount}`;
};

// Helper to format dates
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Helper to get category icon color
export const getCategoryIcon = (category) => {
  const icons = {
    salary: "💼",
    food: "🍔",
    transport: "🚗",
    entertainment: "🎬",
    bills: "📄",
    shopping: "🛍️",
    other: "💰",
  };
  return icons[category?.toLowerCase()] || "💰";
};

// Helper to get transaction badge color
export const getTransactionBadgeColor = (type) => {
  return type === "Income"
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-600";
};

// Helper to calculate percentage change
export const calculatePercentageChange = (current, previous) => {
  if (previous === 0) return 0;
  const change = ((current - previous) / previous) * 100;
  return change.toFixed(1);
};

// Helper to generate random color for different categories
export const getCategoryColor = (category) => {
  const colors = {
    salary: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    food: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
    },
    transport: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
    },
    entertainment: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-100",
    },
    bills: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      border: "border-yellow-100",
    },
    shopping: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
    },
  };
  return colors[category?.toLowerCase()] || colors.salary;
};
