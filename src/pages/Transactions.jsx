import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFileExport } from "react-icons/fa6";
import TransactionHeader from "../components/Transactions/TransactionHeader";
import SummaryStats from "../components/Transactions/SummaryStats";
import TransactionFilters from "../components/Transactions/TransactionFilters";
import TransactionTableView from "../components/Transactions/TransactionTableView";
import EmptyState from "../components/Transactions/EmptyState";
import Pagination from "../components/Transactions/Pagination";
import QuickAddModal from "../components/Transactions/QuickAddModal";

const Transactions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    dateRange: "all",
    category: "all",
    type: "all",
    sortBy: "latest",
    amountMin: 0,
    amountMax: 500,
    merchant: "all",
    dateFrom: "",
    dateTo: "",
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (!isFilterOpen) return;

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  // Sample transactions data
  const allTransactions = [
    {
      id: 1,
      name: "Annette Block",
      date: "20 Feb 2025 AT 10:00 AM",
      type: "Income",
      amount: "$948.55",
      category: "Salary",
    },
    {
      id: 2,
      name: "Wade Warren",
      date: "10 May 2025 AT 10:00 PM",
      type: "Income",
      amount: "$328.85",
      category: "Salary",
    },
    {
      id: 3,
      name: "Jacks Cooper",
      date: "20 Aug 2025 AT 03:00 AM",
      type: "Expense",
      amount: "$446.61",
      category: "Food",
    },
    {
      id: 4,
      name: "Henry Roberts",
      date: "24 Jan 2025 AT 12:00 PM",
      type: "Income",
      amount: "$778.35",
      category: "Salary",
    },
    {
      id: 5,
      name: "Kristin Weston",
      date: "18 Dec 2025 AT 05:00 AM",
      type: "Expense",
      amount: "$302.87",
      category: "Food",
    },
    {
      id: 6,
      name: "Bestie Cooper",
      date: "30 Sep 2025 AT 06:00 PM",
      type: "Income",
      amount: "$106.58",
      category: "Salary",
    },
    {
      id: 7,
      name: "Theresa Webb",
      date: "28 Mar 2025 AT 10:00 AM",
      type: "Expense",
      amount: "$219.78",
      category: "Food",
    },
    {
      id: 8,
      name: "Ariene McCoy",
      date: "08 Nov 2025 AT 03:00 PM",
      type: "Expense",
      amount: "$105.55",
      category: "Food",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
    {
      id: 9,
      name: "Jackson Toper",
      date: "12 Oct 2025 AT 03:00 AM",
      type: "Income",
      amount: "$210.45",
      category: "Salary",
    },
  ];

  // Filter and search transactions
  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      filters.type === "all" ||
      transaction.type.toLowerCase() === filters.type.toLowerCase();

    const matchesCategory =
      filters.category === "all" ||
      transaction.category.toLowerCase() === filters.category.toLowerCase();

    return matchesSearch && matchesType && matchesCategory;
  });

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIdx, endIdx);

  const handleExportCSV = () => {
    const headers = ["Merchant", "Date", "Type", "Category", "Amount"];
    const csvContent = [
      headers.join(","),
      ...filteredTransactions.map((t) =>
        [t.name, t.date, t.type, t.category, t.amount].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `transactions-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  const handleAddTransaction = (data) => {
    console.log("New transaction:", data);
    // TODO: Add API call to save transaction
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="space-y-6 sm:space-y-8">
        <div ref={containerRef} className="relative">
          {/* Header */}
          <TransactionHeader
            onAddClick={() => setIsModalOpen(true)}
            onFilterClick={() => setIsFilterOpen(!isFilterOpen)}
            onSearch={setSearchQuery}
          />

          {/* Filter Panel */}
          <div className="absolute right-0 top-full mt-3 z-50 w-full sm:w-auto">
            <TransactionFilters
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              onApply={(newFilters) => {
                setFilters(newFilters);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SummaryStats
            totalTransactions={allTransactions.length}
            totalIncome={125000}
            totalExpenses={45000}
          />
        </motion.div>

        {/* Transactions Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 sm:space-y-5"
        >
          {/* Header with Export */}
          {paginatedTransactions.length > 0 && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Recent Transactions
              </h2>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExportCSV}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-xs sm:text-sm transition-all"
              >
                <FaFileExport size={14} />
                Export CSV
              </motion.button>
            </div>
          )}

          {/* Transactions Table or Empty State */}
          {paginatedTransactions.length > 0 ? (
            <>
              <TransactionTableView transactions={paginatedTransactions} />

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredTransactions.length}
                />
              )}
            </>
          ) : (
            <EmptyState onAddClick={() => setIsModalOpen(true)} />
          )}
        </motion.div>
      </div>

      {/* Quick Add Modal */}
      <QuickAddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTransaction}
      />
    </div>
  );
};

export default Transactions;
