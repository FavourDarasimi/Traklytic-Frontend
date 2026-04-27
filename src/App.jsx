import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import MobileHeader from "./components/MobileHeader";
import AddTransactionForm from "./components/AddTransactionForm";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />

        {/* Dashboard layout routes */}
        <Route
          path="/"
          element={
            <div className="flex flex-col xl:flex-row">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block lg:w-[220px] lg:border-r-[1px] xl:w-[17%] border-gray-200 h-screen lg:fixed lg:left-0 lg:top-0">
                <SideBar />
              </div>

              {/* Mobile Sidebar */}
              <MobileSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />

              {/* Main Content */}
              <div className="w-full lg:ml-[220px] xl:ml-[17%] xl:w-[83%] min-h-screen py-4 md:py-5 px-4 md:px-6 xl:px-7 bg-gray-50 ">
                {/* Mobile Header with Hamburger Menu */}
                <MobileHeader
                  onMenuClick={toggleSidebar}
                  onAddTransaction={() => setShowAddTransaction(true)}
                />

                {/* Desktop Header */}
                <div className="hidden lg:block mb-4">
                  <Header
                    onAddTransaction={() => setShowAddTransaction(true)}
                  />
                </div>

                {/* Page Content */}
                <Outlet />
              </div>
            </div>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      {/* Add Transaction Form */}
      <AddTransactionForm
        isOpen={showAddTransaction}
        onClose={() => setShowAddTransaction(false)}
      />
    </div>
  );
}

export default App;
