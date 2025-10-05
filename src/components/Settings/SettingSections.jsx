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
      <h1
        className={`text-[16px]  cursor-pointer ${
          section === section_name
            ? "font-bold text-green-600"
            : "text-gray-500"
        }`}
        onClick={() => setSection(section_name)}
      >
        {title}
      </h1>
    </div>
  );
};

export default SettingSections;
