import React from "react";
import {
  ShoppingCart,
  Briefcase,
  FileText,
  Bus,
  PiggyBank,
  CreditCard,
  RefreshCw,
  TrendingUp,
  ChevronRight,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const categoryConfig = {
  Food: { icon: ShoppingCart, bg: "bg-orange-50", color: "text-orange-500" },
  Income: { icon: Briefcase, bg: "bg-green-50", color: "text-green-600" },
  Bills: { icon: FileText, bg: "bg-blue-50", color: "text-blue-500" },
  Transport: { icon: Bus, bg: "bg-purple-50", color: "text-purple-500" },
  Savings: { icon: PiggyBank, bg: "bg-teal-50", color: "text-teal-500" },
  Default: { icon: CreditCard, bg: "bg-gray-50", color: "text-gray-500" },
};

const LatestTransactionTable = () => {
  const transactions = [
    {
      id: 1,
      party_name: "Shoprite",
      amount: 3200,
      type: "debit",
      category: { id: 1, name: "Food" },
      notes: "Weekly groceries",
      transaction_date: "2025-09-06T12:21:00Z",
      recurring: false,
      add_savings: false,
      savings_percentage: null,
      savings: null,
      savings_note: null,
      receipt: null,
    },
    {
      id: 2,
      party_name: "Employer Ltd",
      amount: 150000,
      type: "credit",
      category: { id: 2, name: "Income" },
      notes: "Monthly salary",
      transaction_date: "2025-09-05T09:00:00Z",
      recurring: true,
      add_savings: true,
      savings_percentage: 20,
      savings: { id: 1, name: "Emergency Fund" },
      savings_note: "Auto-saving 20% of salary",
      receipt: null,
    },
    {
      id: 3,
      party_name: "DSTV",
      amount: 5000,
      type: "debit",
      category: { id: 3, name: "Bills" },
      notes: null,
      transaction_date: "2025-09-04T14:10:00Z",
      recurring: true,
      add_savings: false,
      savings_percentage: null,
      savings: null,
      savings_note: null,
      receipt: null,
    },
    {
      id: 4,
      party_name: "Uber",
      amount: 2500,
      type: "debit",
      category: { id: 4, name: "Transport" },
      notes: "Ride to airport",
      transaction_date: "2025-09-03T18:44:00Z",
      recurring: false,
      add_savings: false,
      savings_percentage: null,
      savings: null,
      savings_note: null,
      receipt: null,
    },
    {
      id: 5,
      party_name: "Freelance Client",
      amount: 50000,
      type: "credit",
      category: { id: 2, name: "Income" },
      notes: "UI design project",
      transaction_date: "2025-09-02T11:00:00Z",
      recurring: false,
      add_savings: true,
      savings_percentage: 10,
      savings: { id: 2, name: "Vacation Fund" },
      savings_note: "Saving towards Bali trip",
      receipt: null,
    },
    {
      id: 6,
      party_name: "GTBank",
      amount: 10000,
      type: "debit",
      category: { id: 5, name: "Savings" },
      notes: "Manual savings transfer",
      transaction_date: "2025-09-01T08:30:00Z",
      recurring: true,
      add_savings: false,
      savings_percentage: null,
      savings: { id: 1, name: "Emergency Fund" },
      savings_note: null,
      receipt: null,
    },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-base md:text-[19px] font-semibold">
            Recent Transactions
          </h2>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* List */}
      <div>
        {transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <CreditCard size={32} className="mb-2 opacity-40" />
            <p className="text-sm">No transactions yet</p>
          </div>
        ) : (
          transactions.slice(0, 5).map((tx, i) => {
            const isCredit = tx.type === "credit";
            const categoryName = tx.category?.name ?? "Default";
            const config =
              categoryConfig[categoryName] ?? categoryConfig.Default;
            const Icon = config.icon;
            const TypeIcon = isCredit ? ArrowDownLeft : ArrowUpRight;

            return (
              <div
                key={tx.id ?? i}
                className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                  i < transactions.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {/* Category Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${config.bg}`}
                >
                  <Icon size={20} className={config.color} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {tx.party_name ?? "Unknown"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {tx.category && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                        {tx.category.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Amount + date + chevron */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`flex items-center gap-0.5 text-sm font-semibold ${
                        isCredit ? "text-green-600" : "text-gray-900"
                      }`}
                    >
                      <TypeIcon
                        size={13}
                        className={
                          isCredit ? "text-green-500" : "text-gray-400"
                        }
                      />
                      ₦{tx.amount?.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {new Date(tx.transaction_date).toLocaleDateString(
                        "en-NG",
                        { month: "short", day: "numeric" },
                      )}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-gray-300" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LatestTransactionTable;
