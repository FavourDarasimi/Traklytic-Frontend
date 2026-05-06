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

const LatestTransactionTable = ({ transactions: propTransactions }) => {
  const transactions =
    Array.isArray(propTransactions) && propTransactions.length
      ? propTransactions
      : [];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden w-full flex flex-col min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-base md:text-[19px] font-semibold">
            Recent Transactions
          </h2>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* List or Empty State */}
      {transactions.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[320px]">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gray-100">
              <CreditCard size={24} className="text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">
                No transactions yet
              </p>
              <p className="text-xs text-gray-400">
                Add a transaction to get started
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          {transactions.slice(0, 5).map((tx, i) => {
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
          })}
        </div>
      )}
    </div>
  );
};

export default LatestTransactionTable;
