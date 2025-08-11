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
        <div className="shadow-2xl px-10 py-6 rounded-4xl">
          <h1 className=" pb-7 font-bold text-[25px] text-center text-green-600">
            {authState == "signup" ? "Get Started" : "Welcome Back!"}
          </h1>
          <div className="flex flex-col space-y-5 w-[400px]">
            <div
              className={`${
                authState == "login" ? "hidden" : ""
              } flex flex-col relative`}
            >
              <label className="text-[14px]">Username</label>
              <div className=" relative">
                <FaRegUser
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                    username ? "hidden" : ""
                  }`}
                />
                <input
                  type="username"
                  className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px]">Email</label>
              <div className=" relative">
                <MdOutlineEmail
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                    email ? "hidden" : ""
                  }`}
                />
                <input
                  type="email"
                  className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div
              className={`${authState == "login" ? "hidden" : ""} flex gap-x-5`}
            >
              <div className="flex flex-col relative">
                <label className="text-[14px]">First Name</label>
                <div className=" relative">
                  <FaRegUser
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                      firtsName ? "hidden" : ""
                    }`}
                  />
                  <input
                    type="text"
                    className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                    placeholder="Enter your First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-[14px]">Last Name</label>
                <div className=" relative">
                  <FaRegUser
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                      lastName ? "hidden" : ""
                    }`}
                  />
                  <input
                    type="text"
                    className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                    placeholder="Enter your Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px]">Password</label>
              <div className=" relative">
                <MdLockOutline
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                    password ? "hidden" : ""
                  }`}
                />
                <input
                  type="password"
                  className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div
              className={`${
                authState == "login" ? "hidden" : ""
              } flex flex-col relative`}
            >
              <label className="text-[14px]">Re Password</label>
              <div className=" relative">
                <MdLockOutline
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                    repassword ? "hidden" : ""
                  }`}
                />
                <input
                  type="password"
                  className="border-b-[1px] border-b-[#a9a9b0] w-full h-[40px] placeholder:pl-10 placeholder:text-[13px] focus:border-b-2 focus:border-green-600 outline-none"
                  placeholder="Enter your Password Again"
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          {authState == "signup" ? (
            ""
          ) : (
            <h1 className="text-right pt-2 text-[13px] cursor-pointer">
              Forgot password?
            </h1>
          )}
          <Link to="/dashboard/">
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:scale-105 duration-500 text-white w-full py-3 rounded-3xl mt-5"
            >
              {authState == "signup" ? "Sign Up" : "Log In"}
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
              New User?{" "}
              <span
                className="hover:text-green-600 font-semibold cursor-pointer"
                onClick={() => setAuthState("signup")}
              >
                Sign Up
              </span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authetication;
