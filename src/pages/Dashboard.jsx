import React from "react";
import CategoryExpensePieChart from "../components/Dashboard/CategoryExpensePieChart";
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
    <div className=" ">
      <div className="">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[27px] pt-3 font-medium">
              {getGreetingTime()} Darasimi!👋
            </h1>
            <h1 className="text-[16px]">
              Ready to take control of your expenses?
            </h1>
          </div>
          <Header />
        </div>

        <div className="mt-2"></div>

        <div className=" flex justify-between mt-5">
          <div>
            <div className="flex justify-between gap-x-10">
              <div className="w-60 border-[1px] border-[#e6e6e6] shadow-xl bg-white p-5 rounded-xl">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="text-[15px] font-medium">Monthly Income</div>
                  <FaArrowTrendUp size={15} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success text-green-600">
                    +$5,432.89
                  </div>
                  <p className="text-[13px] ">+2.5% from last month</p>
                </div>
              </div>
              <div className="w-60 border-[1px] border-[#e6e6e6] shadow-xl bg-white p-5 rounded-xl">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="text-[15px] font-medium">
                    Monthly Expenses
                  </div>
                  <FaArrowTrendDown size={15} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success text-red-600">
                    -$5,432.89
                  </div>
                  <p className="text-[13px] ">+2.5% from last month</p>
                </div>
              </div>
              <div className="w-60 border-[1px] border-[#e6e6e6] shadow-xl bg-white p-5 rounded-xl">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="text-[15px] font-medium">Daily Average</div>
                  <IoWalletOutline size={15} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success text-green-600">
                    $5,432.89
                  </div>
                  <p className="text-[13px] ">+2.5% from last month</p>
                </div>
              </div>
              <div className="w-60 border-[1px] border-[#e6e6e6] shadow-xl bg-white p-5 rounded-xl">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="text-[15px] font-medium">Top Category</div>
                  <FiPieChart size={15} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success text-blue-600">
                    Food
                  </div>
                  <p className="text-[13px] ">$100 this month</p>
                </div>
              </div>
            </div>

            <div className="mt-8  flex gap-x-6">
              <LatestTransactionTable />
              <div className="space-y-5">
                <CategoryExpensePieChart />
                <QuickAction />
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <ExpenseDistribution />
            <MonthlyBudget />
            <TotalTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
