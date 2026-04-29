import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  itemsPerPage = 10,
  totalItems = 100,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const pageNumbers = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
      {/* Info */}
      <p className="text-xs sm:text-sm text-gray-600">
        Showing <span className="font-semibold">{startItem}</span> to{" "}
        <span className="font-semibold">{endItem}</span> of{" "}
        <span className="font-semibold">{totalItems}</span> transactions
      </p>

      {/* Page Navigation */}
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600"
        >
          <FaChevronLeft size={14} />
        </motion.button>

        {/* Page Numbers */}
        <div className="flex gap-1">
          {startPage > 1 && (
            <>
              <motion.button
                onClick={() => onPageChange?.(1)}
                className="px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-gray-700"
              >
                1
              </motion.button>
              {startPage > 2 && (
                <span className="px-2 py-2 text-gray-400">...</span>
              )}
            </>
          )}

          {pageNumbers.map((page) => (
            <motion.button
              key={page}
              onClick={() => onPageChange?.(page)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                currentPage === page
                  ? "bg-green-600 text-white border border-green-600"
                  : "border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </motion.button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-2 py-2 text-gray-400">...</span>
              )}
              <motion.button
                onClick={() => onPageChange?.(totalPages)}
                className="px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-gray-700"
              >
                {totalPages}
              </motion.button>
            </>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600"
        >
          <FaChevronRight size={14} />
        </motion.button>
      </div>
    </div>
  );
};

export default Pagination;
