import React, { useState } from "react";
import { FiPieChart } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";

const CategoriesSettings = () => {
  const [color, setColor] = useState("#44bca2");

  const categories = [
    { name: "Grocery", color: "#45ba12", type: "income" },
    { name: "Grocery", color: "#45ba12", type: "income" },
    { name: "Grocery", color: "#45ba12", type: "income" },
    { name: "Grocery", color: "#45ba12", type: "income" },
    { name: "Grocery", color: "#45ba12", type: "income" },
  ];
  return (
    <div className="w-full ">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[20px] font-medium">
            Default Expense Categories
          </h1>
          <h1 className="text-[14px] mt-1 text-gray-500 bg-red-">
            Manage your expense categories and customize them.
          </h1>
        </div>
        <button className="mt-4 text-center bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[8px] px-[14px] rounded-xl text-[15px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500">
          <IoAddOutline size={20} /> Add Category
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-5">
        {/* Categories List */}
        {categories.map((category, index) => (
          <div className="flex justify-between items-center w-[25%] p-3 rounded-xl bg-white border-[1px] border-[#e6e6e6] hover:shadow-xl hover:scale-105 transition-all duration-500">
            <div>
              <h1 className="text-170px] font-semibold">{category.name}</h1>
              <div className="flex gap-3 mt-3">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="rounded-full"
                />
                <div className="text-[14px] text-gray-500">{color}</div>
                <div
                  className=" rounded-full shadow"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>
            <RiDeleteBinLine color="#e7000b" size={23} />
          </div>
        ))}
      </div>

      {/* <div className="p-4 flex flex-col items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-24 h-12 border rounded"
        />
        <div className="text-lg font-semibold">{color}</div>
        <div
          className="w-24 h-12 rounded shadow"
          style={{ backgroundColor: color }}
        ></div>
      </div> */}
    </div>
  );
};

export default CategoriesSettings;
