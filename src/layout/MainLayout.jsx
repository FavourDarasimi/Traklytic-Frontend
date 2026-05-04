import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import MobileNavbar from "./MobileNavbar";
import AddTransactionForm from "../components/AddTransactionForm";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col xl:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-[220px] lg:border-r-[1px] xl:w-[17%] border-gray-200 h-screen lg:fixed lg:left-0 lg:top-0 z-50">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="w-full lg:ml-[220px] xl:ml-[17%] xl:w-[83%] min-h-screen py-4 md:py-5 px-4 md:px-6 xl:px-7 bg-gray-50">
        {/* Mobile Header with Hamburger Menu */}
        <MobileNavbar
          onMenuClick={toggleSidebar}
          onAddTransaction={() => setShowAddTransaction(true)}
        />

        {/* Desktop Header */}
        <div className="hidden lg:block mb-4">
          <Navbar onAddTransaction={() => setShowAddTransaction(true)} />
        </div>

        {/* Page Content */}
        <Outlet />
      </div>

      {/* Add Transaction Form */}
      <AddTransactionForm
        isOpen={showAddTransaction}
        onClose={() => setShowAddTransaction(false)}
      />
    </div>
  );
};

export default MainLayout;
