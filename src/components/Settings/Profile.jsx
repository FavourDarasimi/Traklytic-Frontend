import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import Sarah from "../../assets/sarah.jpg";
import { GoUpload } from "react-icons/go";
import { FiSave } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="w-full  ">
      <div className="flex gap-x-5 items-center">
        <FaRegUser size={25} />
        <div>
          {" "}
          <h1 className="text-[20px] font-medium">Profile Information</h1>
          <h1 className="text-[13px]">
            Update your account profile information
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-x-5 mt-5">
        <img src={Sarah} alt="" className="rounded-full w-28 h-28 " />
        <div className="space-y-3">
          <div className="flex items-center gap-x-3 px-4 py-2 border-[1px] border-[#e6e6e6]  rounded  w-fit h-fit  bg-gray-50 cursor-pointer">
            <GoUpload size={20} />
            <button className="text-[15px]">Change Photo</button>
          </div>{" "}
          <h1 className="text-xs">JPG, PNG or GIF. Max size of 2MB.</h1>
        </div>
      </div>
      <div className="mx-10 mt-7">
        <div className="w-full">
          <form className=" space-y-4">
            <div className="grid grid-cols-2 gap-x-7 ">
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Username
                </label>
                <input
                  type="text"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Username"
                />
              </div>
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Email
                </label>
                <input
                  type="email"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-7">
              {" "}
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Age
                </label>
                <input
                  type="number"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Age"
                />
              </div>
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Phone Number
                </label>
                <input
                  type="number"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-7">
              {" "}
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Occupation
                </label>
                <input
                  type="text"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Occupation"
                />
              </div>
              <div className="">
                <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  className=" rounded-md p-2 w-full  h-[43px] border-[1px] border-[#e6e6e6] outline-none  "
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="input" className="font-medium pb-1 text-[15px]">
                Bio
              </label>
              <textarea
                type="text"
                className=" rounded-md p-2 w-full border-[1px] border-[#e6e6e6] outline-none  "
                placeholder="Bio"
              />
            </div>
            <button className="mt-4 text-center bg-blue-500 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[8px] px-[14px] rounded-xl text-[15px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
