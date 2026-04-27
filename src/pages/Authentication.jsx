import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Authetication = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firtsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [authState, setAuthState] = useState("signup");
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className=" px-10 py-6 w-full sm:w-[50%] md:w-[40%] lg:w-[34%] xl:w-[26%]">
          <div className="pb-7 text-center">
            <h1 className="font-bold text-[25px]">
              {authState == "signup" ? "Let's Get Started" : "Welcome Back!"}
            </h1>
            <h1 className="text-gray-600 text-[15px] pt-1">
              {authState == "signup"
                ? "Take control of your finances with smart expense tracking and budgeting tool"
                : "Sign in to continue tracking your expenses"}
            </h1>
          </div>
          <div className="flex flex-col space-y-5 ">
            <div
              className={`${
                authState == "login" ? "hidden" : ""
              } flex flex-col relative`}
            >
              <label className="text-[14.5px] font-semibold">Username</label>
              <div className=" relative">
                <input
                  type="username"
                  className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14.5px] font-semibold">Email</label>
              <div className=" relative">
                <input
                  type="email"
                  className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div
              className={`${authState == "login" ? "hidden" : ""} flex gap-x-5 w-full`}
            >
              <div className="flex flex-col ">
                <label className="text-[14.5px] font-semibold">
                  First Name
                </label>
                <div className=" ">
                  <input
                    type="text"
                    className="border-[1px] border-[#a9a9b0] rounded-xl  h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                    placeholder="John"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col ">
                <label className="text-[14.5px] font-semibold">Last Name</label>
                <div className=" ">
                  <input
                    type="text"
                    className="border-[1px] border-[#a9a9b0] rounded-xl  h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                    placeholder="Doe"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14.5px] font-semibold">Password</label>
              <div className=" relative">
                <input
                  type="password"
                  className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div
              className={`${
                authState == "login" ? "hidden" : ""
              } flex flex-col relative`}
            >
              <label className="text-[14.5px] font-semibold">
                Confirm Password
              </label>
              <div className=" relative">
                <input
                  type="password"
                  className="border-[1px] border-[#a9a9b0] rounded-xl w-full h-[48px] p-3 mt-2 text-[14px] focus:border-2 focus:border-green-600 outline-none"
                  placeholder="Password"
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          {authState == "signup" ? (
            ""
          ) : (
            <h1 className="text-right pt-2 text-[13px] cursor-pointer text-green-600 font-semibold">
              Forgot password?
            </h1>
          )}
          <Link to="/dashboard/">
            <button
              type="submit"
              className="cursor-pointer bg-green-600 hover:scale-105 duration-500 text-white w-full py-3 rounded-3xl mt-5"
            >
              {authState == "signup" ? "Create account" : "Log In"}
            </button>
          </Link>
          {authState == "signup" ? (
            <h1 className="pt-4 text-center">
              Existing User?{" "}
              <span
                className="hover:text-green-600 font-semibold cursor-pointer"
                onClick={() => setAuthState("login")}
              >
                Login
              </span>
            </h1>
          ) : (
            <h1 className="pt-4 text-center">
              New to Tracklytic?{" "}
              <span
                className="text-green-600 font-semibold cursor-pointer"
                onClick={() => setAuthState("signup")}
              >
                Create account
              </span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authetication;
