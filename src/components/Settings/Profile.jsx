import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { GoUpload } from "react-icons/go";
import { FiSave } from "react-icons/fi";
import Sarah from "../../assets/sarah.jpg";

const Profile = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex gap-x-3 items-center">
        <FaRegUser size={22} className="text-green-600 flex-shrink-0" />
        <h1 className="text-[20px] md:text-[22px] font-semibold">
          Profile Information
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Update your account profile information
      </p>

      {/* Avatar */}
      <div className="flex items-center gap-x-4 mt-5">
        <img
          src={Sarah}
          alt="Profile"
          className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover flex-shrink-0"
        />
        <div className="space-y-2">
          <label className="flex items-center gap-x-2 px-3 py-2 border border-gray-200 rounded-lg w-fit bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <GoUpload size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Change Photo
            </span>
            <input type="file" className="hidden" accept="image/*" />
          </label>
          <p className="text-xs text-gray-400">JPG, PNG or GIF. Max size of 2MB.</p>
        </div>
      </div>

      {/* Form */}
      <div className="mt-7">
        <form className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Age"
              />
            </div>
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Occupation
              </label>
              <input
                type="text"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Occupation"
              />
            </div>
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="rounded-lg p-2.5 w-full h-[43px] border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm transition"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block font-medium text-[14px] text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              className="rounded-lg p-2.5 w-full border border-gray-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm resize-none transition"
              placeholder="Tell us a little about yourself..."
              rows={3}
            />
          </div>

          {/* Save */}
          <button
            type="submit"
            className="flex items-center gap-x-2 bg-green-600 text-white py-2 px-5 rounded-xl text-sm md:text-[15px] font-medium hover:bg-green-700 transition-colors mt-2"
          >
            <FiSave size={16} />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
