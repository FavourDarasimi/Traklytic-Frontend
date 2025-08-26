import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />

        {/* Dashboard layout routes */}
        <Route
          path="/"
          element={
            <div className="flex">
              <div className="w-[17%] border-r-[1px] border-gray-200 min-h-screen fixed">
                <SideBar />
              </div>
              <div className="w-[83%] ml-[17%] min-h-screen py-5 px-7">
                {/* The nested routes will render here */}
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
    </div>
  );
}

export default App;
