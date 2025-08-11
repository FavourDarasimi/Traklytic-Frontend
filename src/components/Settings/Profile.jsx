import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import Sarah from "../../assets/sarah.jpg";

const Profile = () => {
  return (
    <div className="w-full border-[1px] border-[#e6e6e6] shadow-xl bg-gradient-to-b from-white to-[#fafafa] p-5 rounded-xl">
      <div className="flex gap-x-5 items-center">
        <FaRegUser size={25} />
        <div>
          {" "}
          <h1 className="text-[20px] font-medium">Profile Account</h1>
          <h1 className="text-[13px]">Update your personal details</h1>
        </div>
      </div>
      <div className="flex mx-10 mt-7 gap-x-1">
        <div className="w-[20%]">
          <img src={Sarah} alt="" className="rounded-full w-28 h-28 " />
          <button className="mt-4 bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[8px] px-[14px] rounded-xl text-[13px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500">
            Change Photo
          </button>
        </div>
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
            <button className="mt-4 text-center bg-green-600 outline-none flex items-center gap-x-1 border-2 cursor-pointer text-white py-[8px] px-[14px] rounded-xl text-[15px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors duration-500">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
