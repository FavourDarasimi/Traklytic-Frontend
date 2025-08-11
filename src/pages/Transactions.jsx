import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { FaNairaSign } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionList from "../components/Transactions/TransactionList";

const Transactions = () => {
  return (
    <div className=" ">
      <div>
        <div className="flex justify-between">
          <h1 className="font-medium text-[25px]">Transaction History</h1>
          <Header />
        </div>
        <h1 className="bg-white p-2 w-fit rounded-xl font-medium mt-5">
          Sep 15, 2025
        </h1>

        <div className="flex justify-evenly mt-5">
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
