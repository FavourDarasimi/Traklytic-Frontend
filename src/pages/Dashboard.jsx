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
import AIInsights from "../components/Dashboard/AIInsights";

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
      <div className="md:flex md:flex-col xl:flex-row xl:justify-between xl:items-start gap-4">
        <div className="-space-y-2">
          <p className="text-sm text-gray-600 font-medium">
            {getGreetingTime()} 👋
          </p>
          <h1 className="text-[24px] lg:text-[25px] xl:text-[26px] font-bold text-gray-900">
            Jake Smith
          </h1>
        </div>
      </div>

      <div className="mt-4 md:mt-2"></div>

      {/* Main Dashboard Grid */}
      <div className="flex flex-col 2xl:flex-row gap-5 mt-5 lg:mt-6">
        {/* Left Section - Main Content */}
        <div className="w-full xl:flex-1 min-w-0">
          {/* Stats Cards - Responsive Grid */}
          <div className="grid grid-flow-col auto-cols-[11rem] gap-4 overflow-x-auto md:grid-cols-4 md:grid-flow-row md:auto-cols-auto md:overflow-x-hidden lg:gap-4 xl:gap-4">
            {/* Monthly Income Card */}
            <div className="border border-gray-200 bg-white p-3 xl:p-4 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-2 xl:pb-3">
                <p className="text-xs font-medium text-gray-600 truncate pr-1">
                  Monthly Income
                </p>
                <FaArrowTrendUp
                  size={13}
                  className="flex-shrink-0 text-green-600"
                />
              </div>
              <div>
                <div className="text-lg xl:text-xl 2xl:text-2xl font-bold text-green-600 whitespace-nowrap">
                  +₦5,432.89
                </div>
                <p className="text-[11px] xl:text-xs text-gray-500 mt-1 truncate">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Monthly Expenses Card */}
            <div className="border border-gray-200 bg-white p-3 xl:p-4 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-2 xl:pb-3">
                <p className="text-xs font-medium text-gray-600 truncate pr-1">
                  Monthly Expenses
                </p>
                <FaArrowTrendDown
                  size={13}
                  className="flex-shrink-0 text-red-500"
                />
              </div>
              <div>
                <div className="text-lg xl:text-xl 2xl:text-2xl font-bold text-red-500 whitespace-nowrap">
                  -₦5,432.89
                </div>
                <p className="text-[11px] xl:text-xs text-gray-500 mt-1 truncate">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Daily Average Card */}
            <div className="border border-gray-200 bg-white p-3 xl:p-4 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-2 xl:pb-3">
                <p className="text-xs font-medium text-gray-600 truncate pr-1">
                  Daily Average
                </p>
                <IoWalletOutline
                  size={13}
                  className="flex-shrink-0 text-blue-600"
                />
              </div>
              <div>
                <div className="text-lg xl:text-xl 2xl:text-2xl font-bold text-green-600 whitespace-nowrap">
                  ₦5,432.89
                </div>
                <p className="text-[11px] xl:text-xs text-gray-500 mt-1 truncate">
                  +2.5% from last month
                </p>
              </div>
            </div>

            {/* Top Category Card */}
            <div className="border border-gray-200 bg-white p-3 xl:p-4 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-2 xl:pb-3">
                <p className="text-xs font-medium text-gray-600 truncate pr-1">
                  Top Category
                </p>
                <FiPieChart
                  size={13}
                  className="flex-shrink-0 text-purple-600"
                />
              </div>
              <div>
                <div className="text-lg xl:text-xl 2xl:text-2xl font-bold text-purple-600 whitespace-nowrap">
                  Food
                </div>
                <p className="text-[11px] xl:text-xs text-gray-500 mt-1 truncate">
                  ₦100 this month
                </p>
              </div>
            </div>
          </div>

          {/* Charts and Tables Section */}
          <div className="mt-6 w-full md:mt-8 flex flex-col md:hidden xl:flex xl:flex-row gap-6 items-stretch">
            {/* Left Column - Charts */}
            <div className="flex flex-col xl:flex xl:w-[60%] w-full space-y-5 xl:space-y-6">
              <ExpensesStatistics />
            </div>

            {/* Right Column - Table */}
            <div className="w-full xl:w-[40%] flex flex-col">
              <LatestTransactionTable />
            </div>
          </div>

          {/* MonthlyBudget + TotalTransactions below charts — desktop only */}
          <div className="hidden 2xl:grid 2xl:grid-cols-2 gap-6 mt-6">
            <MonthlyBudget />
            <TotalTransactions />
          </div>
        </div>

        {/* Right Section - Sidebar Stats (Desktop only) */}
        <div className="hidden xl:flex xl:gap-5 2xl:block 2xl:w-80 space-y-5 xl:space-y-5">
          <div className="hidden xl:flex xl:w-[50%] 2xl:w-full">
            <MonthlyExpenses />
          </div>

          <div className="w-full xl:w-[50%] 2xl:w-full space-y-5">
            <AIInsights />

            <div className="hidden xl:flex 2xl:hidden gap-5 w-full items-stretch">
              <div className="w-[50%] flex-1 h-full">
                <MonthlyBudget />
              </div>

              <div className="w-[50%] flex-1 h-full">
                <TotalTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Laptop */}

      <div className="hidden md:block xl:hidden w-full space-y-5 lg:space-y-6 pt-5 lg:pt-6">
        <div className="flex gap-5 lg:gap-5 w-full">
          {/* Left column — charts + table */}
          <div className="flex flex-col md:w-[60%] lg:w-[62%] space-y-5">
            <ExpensesStatistics />
            <LatestTransactionTable />
            <div className="grid grid-cols-2 gap-4">
              <MonthlyBudget />
              <TotalTransactions />
            </div>
          </div>
          {/* Right column — sidebar widgets */}
          <div className="md:w-[40%] lg:w-[38%] space-y-5">
            <MonthlyExpenses />
            <AIInsights />
          </div>
        </div>
      </div>

      {/* Mobile - Right section and QuickAction at the bottom */}
      <div className="block md:hidden mt-6 space-y-5">
        <MonthlyExpenses />
        <AIInsights />

        {/* <div className="grid grid-cols-2 gap-3"> */}
        <MonthlyBudget />
        <TotalTransactions />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
