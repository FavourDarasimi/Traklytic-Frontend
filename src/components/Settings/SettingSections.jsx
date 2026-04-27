import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

const SettingSections = ({ section_name, title, section, setSection }) => {
  return (
    <div className="flex items-center">
      <div className="w-6">
        {section === section_name && (
          <RiArrowRightSFill size={22} className="text-green-600" />
        )}
      </div>{" "}
      {/* empty placeholder for arrow */}
      <button
        className={`text-sm md:text-[15px] cursor-pointer text-left transition-colors ${
          section === section_name
            ? "font-bold text-green-600"
            : "text-gray-500 hover:text-gray-800"
        }`}
        onClick={() => setSection(section_name)}
      >
        {title}
      </button>
    </div>
  );
};

export default SettingSections;
