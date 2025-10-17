import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoAddOutline } from "react-icons/io5";

const AddCategory = ({ setShowCategory }) => {
  const [color, setColor] = useState("#44bca2");
  const closeAddCategory = () => {
    setShowCategory(false);
  };

  return (
    <div className="fixed z-10 inset-0  bg-black/30 w-100% grid place-items-center ">
      <div className="bg-white p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-[19px] font-semibold">Add Category</h1>
          <RxCross2
            size={20}
            onClick={() => closeAddCategory()}
            className="cursor-pointer"
          />
        </div>

        <div className="space-y-5 mt-4">
          <div className="">
            <label htmlFor="input" className="font-medium pb-1 text-[15px]">
              Name
            </label>
            <input
              type="text"
              className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  mt-1"
              placeholder="Occupation"
            />
          </div>
          <div className="">
            <label htmlFor="input" className="font-medium pb-1 text-[15px]">
              Type
            </label>

            <select className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none mt-1 ">
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div>
            <label htmlFor="input" className="font-medium pb-1 text-[15px]">
              Color Tag
            </label>
            <div className="flex gap-3 mt-1">
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
          <button className="mt-4 text-center bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[8px] px-[14px] rounded-xl text-[15px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500">
            <IoAddOutline size={20} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
