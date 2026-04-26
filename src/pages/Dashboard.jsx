import React from "react";
import CategoryExpensePieChart from "../components/Dashboard/CategoryExpensePieChart";
import ExpensesStatistics from "../components/Dashboard/ExpensesStatistics";
import MonthlyExpenses from "../components/Dashboard/MonthlyExpenses";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import LatestTransactionTable from "../components/Dashboard/LatestTransactionTable";
import QuickAction from "../components/Dashboard/QuickAction";
import ProgressBar from "../components/Dashboard/ProgressBar";
import Header from "../components/Header";
import MonthlyBudget from "../components/Dashboard/MonthlyBudget";
import TotalTransactions from "../components/Dashboard/TotalTransactions";
import ExpenseDistribution from "../components/Dashboard/ExpenseDistribution";

const Dashboard = () => {
  const getGreetingTime = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else if (hours >= 17 && hours < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };
  return (
    <div className="w-full">
      {/* Greeting Section - Hidden on mobile, shown on larger screens */}
      <div className="md:flex md:flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
        <div className="-space-y-2">
          <p className="text-sm text-gray-600 font-medium">
            {getGreetingTime()} 👋
          </p>
          <h1 className="text-[24px] lg:text-[26px] font-bold text-gray-900">
            Olaniran Darasimi
          </h1>
        </div>
      </div>

      <div className="mt-4 md:mt-2"></div>

      {/* Main Dashboard Grid */}
      <div className="flex flex-col lg:flex-row gap-6 mt-5">
        {/* Left Section - Main Content */}
        <div className="w-full lg:flex-1">
          {/* Stats Cards - Responsive Grid */}
          <div className="grid grid-flow-col auto-cols-[11rem] gap-4 overflow-x-auto md:grid-cols-4 md:grid-flow-row md:auto-cols-auto md:overflow-x-hidden">
            {/* Monthly Income Card */}
            <div className="border border-gray-200 bg-white p-4 rounded-2xl">
              <div className="flex items-center justify-between pb-3">
                <p className="text-xs font-medium text-gray-600 truncate">
                  Monthly Income
                </p>
                <FaArrowTrendUp
                  size={14}
                  className="flex-shrink-0 text-green-600"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  +₦5,432.89
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Monthly Expenses Card */}
            <div className="border border-gray-200 bg-white p-4 rounded-2xl">
              <div className="flex items-center justify-between pb-3">
                <p className="text-xs font-medium text-gray-600 truncate">
                  Monthly Expenses
                </p>
                <FaArrowTrendDown
                  size={14}
                  className="flex-shrink-0 text-red-500"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">
                  -₦5,432.89
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Daily Average Card */}
            <div className="border border-gray-200 bg-white p-4 rounded-2xl">
              <div className="flex items-center justify-between pb-3">
                <p className="text-xs font-medium text-gray-600 truncate">
                  Daily Average
                </p>
                <IoWalletOutline
                  size={14}
                  className="flex-shrink-0 text-blue-600"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  ₦5,432.89
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Top Category Card */}
            <div className="border border-gray-200 bg-white p-4 rounded-2xl">
              <div className="flex items-center justify-between pb-3">
                <p className="text-xs font-medium text-gray-600 truncate">
                  Top Category
                </p>
                <FiPieChart
                  size={14}
                  className="flex-shrink-0 text-purple-600"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">Food</div>
                <p className="text-xs text-gray-500 mt-1">₦100 this month</p>
              </div>
            </div>
          </div>

          {/* Charts and Tables Section */}
          <div className="mt-6 w-full md:mt-8 flex flex-col md:hidden lg:flex lg:flex-row gap-6 items-stretch">
            {/* Left Column - Charts (Desktop only in this position) */}
            <div className="flex flex-col  lg:flex lg:w-[60%] w-full space-y-5">
              <ExpensesStatistics />
            </div>

            {/* Right Column - Table) */}

            <div className="w-full lg:w-[40%] ">
              <LatestTransactionTable />
            </div>
          </div>
        </div>

        {/* Right Section - Sidebar Stats (Desktop only in this position) */}
        <div className="hidden lg:block lg:w-80 space-y-5">
          <div className="hidden lg:flex w-full">
            <MonthlyExpenses />
          </div>
          <MonthlyBudget />
          <TotalTransactions />
        </div>
      </div>

      {/* Tablet */}

      <div className="hidden md:block lg:hidden w-full space-y-5 pt-5">
        <div className="flex gap-5 w-full">
          <div className="flex flex-col  md:w-[60%]  space-y-5">
            <ExpensesStatistics />
          </div>
          <div className="w-[40%] flex flex-col justify-between">
            <MonthlyBudget />
            <TotalTransactions />
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="flex flex-col md:w-[60%] w-full space-y-5">
            <LatestTransactionTable />
          </div>
          <div className="w-[40%]">
            <MonthlyExpenses />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet - Right section and QuickAction at the bottom */}
      <div className="block md:hidden lg:hidden mt-6 md:mt-8 space-y-5">
        <MonthlyExpenses />
        <div className="flex gap-3 items-stretch w-full">
          <div className="w-[50%] ">
            <MonthlyBudget />
          </div>
          <div className="w-[50%] h-full">
            <TotalTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
