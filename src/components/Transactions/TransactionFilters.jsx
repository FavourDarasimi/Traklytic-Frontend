import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const TransactionFilters = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
    amountMin: 0,
    amountMax: 1000000,
    merchant: "all",
    dateFrom: "",
    dateTo: "",
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
      type: "all",
      category: "all",
      amountMin: 0,
      amountMax: 1000000,
      merchant: "all",
      dateFrom: "",
      dateTo: "",
    });
  };

  const filterOptions = {
    categories: [
      { value: "all", label: "All" },
      { value: "health", label: "Health & Fitness" },
      { value: "savings", label: "Savings" },
      { value: "salary", label: "Salary" },
      { value: "food", label: "Food" },
      { value: "shopping", label: "Shopping" },
    ],
    types: [
      { value: "all", label: "All" },
      { value: "income", label: "Income" },
      { value: "expense", label: "Expense" },
    ],
    merchants: [
      { value: "all", label: "All Merchants" },
      { value: "amazon", label: "Amazon Shopping" },
      { value: "uber", label: "Uber" },
      { value: "netflix", label: "Netflix" },
      { value: "starbucks", label: "Starbucks" },
    ],
  };

  // Dual Range Slider Component
  const DualRangeSlider = ({ min, max, valueMin, valueMax, onChange }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(null); // 'min' or 'max'
    const [currentMin, setCurrentMin] = useState(valueMin);
    const [currentMax, setCurrentMax] = useState(valueMax);

    // Update local state when props change
    useEffect(() => {
      setCurrentMin(valueMin);
      setCurrentMax(valueMax);
    }, [valueMin, valueMax]);

    const handleMouseDown = (e, type) => {
      setIsDragging(type);
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const value = Math.round(min + (max - min) * percentage);

      if (isDragging === "min") {
        setCurrentMin(Math.min(value, currentMax));
      } else {
        setCurrentMax(Math.max(value, currentMin));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
      onChange(currentMin, currentMax);
    };

    useEffect(() => {
      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
      }
    }, [isDragging, currentMin, currentMax]);

    const minPercent = ((currentMin - min) / (max - min)) * 100;
    const maxPercent = ((currentMax - min) / (max - min)) * 100;

    return (
      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="relative h-2 bg-gray-200 rounded-full cursor-pointer select-none"
          onMouseDown={(e) => {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            const value = Math.round(min + (max - min) * percentage);
            const closerToMin =
              Math.abs(value - valueMin) < Math.abs(value - valueMax);
            setIsDragging(closerToMin ? "min" : "max");
          }}
        >
          {/* Track */}
          <div
            className="absolute h-2 bg-green-600 rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          {/* Min Handle */}
          <div
            className="absolute w-6 h-6 bg-green-600 border-2 border-white rounded-full -mt-2 shadow-md cursor-grab hover:scale-110 transition-transform"
            style={{ left: `calc(${minPercent}% - 12px)` }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, "min");
            }}
          />

          {/* Max Handle */}
          <div
            className="absolute w-6 h-6 bg-green-600 border-2 border-white rounded-full -mt-2 shadow-md cursor-grab hover:scale-110 transition-transform"
            style={{ left: `calc(${maxPercent}% - 12px)` }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, "max");
            }}
          />
        </div>

        {/* Values Display */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>₦{currentMin.toLocaleString()}</span>
          <span>₦{currentMax.toLocaleString()}</span>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.18 }}
          className="w-full max-w-xl rounded-3xl bg-white border border-gray-200 shadow-xl p-5 sm:p-6 text-sm text-gray-800"
        >
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Filter Transactions
              </h3>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="text-green-600 text-sm font-semibold hover:text-green-700"
            >
              Reset
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-3 text-[14px] font-medium ">Transaction Type</p>
              <div className="flex flex-wrap gap-3">
                {filterOptions.types.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleFilterChange("type", option.value)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      filters.type === option.value
                        ? "border-green-600 bg-green-600/10 text-green-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[14px] font-medium ">
                Transaction Category
              </p>
              <div className="flex flex-wrap gap-3">
                {filterOptions.categories.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleFilterChange("category", option.value)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      filters.category === option.value
                        ? "border-green-600 bg-green-600/10 text-green-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[14px] font-medium ">
                Transaction Amount
              </p>
              <DualRangeSlider
                min={0}
                max={1000000}
                valueMin={filters.amountMin}
                valueMax={filters.amountMax}
                onChange={(min, max) => {
                  handleFilterChange("amountMin", min);
                  handleFilterChange("amountMax", max);
                }}
              />
            </div>

            <div>
              <label className="mb-3 text-[14px] font-medium">Merchant</label>
              <div className="relative">
                <select
                  value={filters.merchant}
                  onChange={(e) =>
                    handleFilterChange("merchant", e.target.value)
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[13.5px] text-gray-800 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
                >
                  {filterOptions.merchants.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-3 text-[14px] font-medium">
                  Date (From)
                </label>
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) =>
                    handleFilterChange("dateFrom", e.target.value)
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[13.5px] text-gray-800 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-3 text-[14px] font-medium">
                  Date (To)
                </label>
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[13.5px] text-gray-800 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleApply}
              className="w-full rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Apply Filter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransactionFilters;
