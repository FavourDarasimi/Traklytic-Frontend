import React from "react";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";

const MobileNavbar = ({ onMenuClick, onAddTransaction }) => {
  return (
    <div className="lg:hidden mb-4 flex justify-between items-center">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open sidebar"
      >
        <Menu size={24} className="text-gray-700" />
      </button>
      <Navbar isMobile={true} onAddTransaction={onAddTransaction} />
    </div>
  );
};

export default MobileNavbar;
