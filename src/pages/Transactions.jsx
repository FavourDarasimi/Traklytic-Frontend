import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionList from "../components/Transactions/TransactionList";

const Transactions = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-bold text-[22px] md:text-[25px] truncate">
            Transaction History
          </h1>
        </div>

        <h2 className="bg-white px-3 py-1.5 w-fit rounded-xl text-xs md:text-sm font-medium mt-4 border border-gray-200 text-gray-600">
          Sep 15, 2025
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-5">
          <TransactionCard
            icon={FaNairaSign}
            name="Available Balance"
            amount={14000}
          />
          <TransactionCard icon={FaWallet} name="Savings" amount={14000} />
          <TransactionCard
            icon={MdArrowDownward}
            name="Income"
            amount={14000}
          />
          <TransactionCard
            icon={MdArrowUpward}
            name="Expenses"
            amount={14000}
          />
        </div>

        <TransactionList />
      </div>
    </div>
  );
};

export default Transactions;
