import React from "react";
import { X } from "lucide-react";
import SideBar from "./SideBar";

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 lg:hidden transform transition-all duration-300 ease-in-out shadow-xl flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h1 className="text-lg font-bold">
            Track<span className="text-green-600">lytic</span>
          </h1>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <SideBar isMobileDrawer={true} />
      </div>
    </>
  );
};

export default MobileSidebar;
