import React from "react";
import { motion } from "framer-motion";
import { FaInbox } from "react-icons/fa6";

const EmptyState = ({ onAddClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12 md:p-16 text-center"
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl sm:text-7xl text-gray-300"
        >
          <FaInbox />
        </motion.div>
      </div>

      {/* Text */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        No transactions yet
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-sm mx-auto">
        Start tracking your spending today by adding your first transaction
      </p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onAddClick}
        className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
      >
        Add Your First Transaction
      </motion.button>
    </motion.div>
  );
};

export default EmptyState;
