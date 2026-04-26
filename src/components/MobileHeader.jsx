import React from "react";
import { Menu } from "lucide-react";
import Header from "./Header";

const MobileHeader = ({ onMenuClick, onAddTransaction }) => {
  return (
    <div className="lg:hidden mb-4 flex justify-between items-center">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open sidebar"
      >
        <Menu size={24} className="text-gray-700" />
      </button>
      <Header isMobile={true} onAddTransaction={onAddTransaction} />
    </div>
  );
};

export default MobileHeader;
