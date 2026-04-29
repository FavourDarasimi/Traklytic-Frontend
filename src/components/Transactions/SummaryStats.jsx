import React from "react";
import { motion } from "framer-motion";
import { FaWallet, FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const SummaryStats = ({
  totalTransactions = 45,
  totalIncome = 125000,
  totalExpenses = 45000,
}) => {
  const stats = [
    {
      id: 1,
      icon: FaWallet,
      label: "Total Transactions",
      value: totalTransactions,
      suffix: "",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      change: "+12%",
      changeColor: "text-green-600",
    },
    {
      id: 2,
      icon: FaArrowDownLong,
      label: "Total Income",
      value: totalIncome,
      suffix: "₦",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
      change: "+8.5%",
      changeColor: "text-green-600",
    },
    {
      id: 3,
      icon: FaArrowUpLong,
      label: "Total Expenses",
      value: totalExpenses,
      suffix: "₦",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-100",
      change: "+3.2%",
      changeColor: "text-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className={` border bg-white border-gray-300 rounded-xl p-5 sm:p-6 md:p-7 transition-all hover:shadow-lg cursor-pointer`}
          >
            {/* Header with Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.iconColor} text-xl sm:text-2xl`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold ${stat.changeColor}`}
              >
                {stat.change}
              </span>
            </div>

            {/* Label */}
            <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
              {stat.label}
            </p>

            {/* Value */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {stat.suffix}
              {typeof stat.value === "number"
                ? stat.value.toLocaleString()
                : stat.value}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SummaryStats;
