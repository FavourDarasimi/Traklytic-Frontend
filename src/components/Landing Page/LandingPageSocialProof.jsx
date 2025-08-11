import React from "react";
import { FaStar } from "react-icons/fa";
import Sarah from "../../assets/sarah.jpg";
import Mark from "../../assets/mark.jpg";

const LandingPageSocialProof = ({ ProofSectionRef }) => {
  return (
    <div
      className="bg-[#1a1a1a] text-white lg:p-10 xs:p-4  mt-20"
      ref={ProofSectionRef}
    >
      <h1 className="lg:text-[32px] xs:text-[24px] font-medium">
        Real Stories. Real Success
      </h1>
      <h1 className="pt-3 lg:text-[17px] xs:text-[14px]">
        Thousands of users trust{" "}
        <span className="font-bold text-green-600">Tracklytic</span> to guide
        their financial journey
      </h1>
      <div className="flex lg:pt-15 xs:pt-10 xs:gap-x-3 lg:gap-x-0 justify-evenly">
        <div>
          <div className="flex gap-x-1">
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
          </div>
          <h1 className="lg:pt-5 xs:pt-3 lg:text-[16px] xs:text-[12px]">
            This app helped me save $500/month! The reports showed me how much I
            was wasting on coffee.
          </h1>
          <div className="flex pt-5 gap-x-3 items-center">
            <img
              src={Sarah}
              alt=""
              className="rounded-full lg:w-14 lg:h-14 xs:w-9 xs:h-9"
            />
            <div className="lg:text-[14px] xs:text-[10px]">
              <h1 className="">Sarah T.</h1>
              <h1 className="">Freelancer</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-x-1">
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
            <FaStar
              fill="yellow"
              className="lg:w-5 lg:h-5 xs:w-[14px] xs:h-[14px]"
            />
          </div>
          <h1 className="lg:pt-5 xs:pt-3 lg:text-[16px] xs:text-[12px]">
            Finally, an expense tracker that doesn’t make budgeting feel like
            homework.{" "}
          </h1>
          <div className="flex pt-5 gap-x-3 items-center">
            <img
              src={Mark}
              alt=""
              className="rounded-full lg:w-14 lg:h-14 xs:w-9 xs:h-9"
            />
            <div className="lg:text-[14px] xs:text-[10px]">
              <h1 className="">Mark R.</h1>
              <h1 className="">Small Business Owner</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSocialProof;
