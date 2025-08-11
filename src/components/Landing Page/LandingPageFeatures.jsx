import React from "react";

const LandingPageFeatures = ({ featureSectionRef }) => {
  return (
    <div
      className="lg:flex xs:block justify-evenly pt-20 xs:px-5"
      ref={featureSectionRef}
    >
      <div className="">
        <h1 className="lg:w-[460px] lg:text-[35px] xs:text-[25px] xs:text-center lg:text-left font-bold ">
          Smarter tools for better money{" "}
          <span className="text-green-600">management</span>
        </h1>
        <h1 className="lg:w-[460px] pt-5 lg:text-[16px] xs:text-[14px]">
          With Tracklytic, managing money becomes effortless—not exhausting.
          Simplifying every part of money management to turn financial chaos
          into clarity
        </h1>
      </div>
      <div className="flex flex-col lg:gap-y-10 xs:gap-y-7 xs:pt-10 lg:pt-0">
        <h1 className="lg:text-[40px] xs:text-[25px] font-bold">
          Key Features
        </h1>
        <div className="flex lg:flex-row xs:flex-col xs:gap-y-7 lg:gap-x-20">
          <div className="w-fit xs:flex xs:gap-x-4 lg:block ">
            <span className="lg:text-[40px] bg-blend-screen lg:bg-white xs:bg-gray-300 xs:h-fit xs:p-2 xs:rounded-full xs:text-[15px]">
              📊
            </span>
            <div className="">
              <h1 className="lg:text-[27px] font-medium">
                Real-Time Expense Tracking
              </h1>
              <h1 className="lg:w-[75%] lg:pt-5 xs:pt-[5px] xs:text-[#6b7280] lg:text-[16px] xs:text-[13px]">
                Log expenses on the go and see where your money goes with
                intuitive charts
              </h1>
            </div>
          </div>
          <div className="w-fit xs:flex xs:gap-x-4 lg:block">
            <span className="lg:text-[40px] bg-blend-screen lg:bg-white xs:bg-gray-300 xs:h-fit xs:p-2 xs:rounded-full xs:text-[15px]">
              🗓️
            </span>
            <div className="">
              <h1 className="lg:text-[27px] font-medium">
                Smart Monthly Budgets
              </h1>
              <h1 className="lg:w-[75%] lg:pt-5 xs:pt-[5px] xs:text-[#6b7280] lg:text-[16px] xs:text-[13px]">
                Set budgets for categories like food or rent, and get alerts
                before you overspend
              </h1>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row xs:flex-col xs:gap-y-7 lg:gap-x-20">
          <div className="w-fit xs:flex xs:gap-x-4 lg:block">
            <span className="lg:text-[40px] bg-blend-screen lg:bg-white xs:bg-gray-300 xs:h-fit xs:p-2 xs:rounded-full xs:text-[15px]">
              📲
            </span>
            <div className="">
              <h1 className="lg:text-[27px] font-medium">Receipt Scanning</h1>
              <h1 className="lg:w-[75%] lg:pt-5 xs:pt-[5px] xs:text-[#6b7280] lg:text-[16px] xs:text-[13px]">
                Snap a photo of receipts—we’ll auto-categorize and log expenses
                for you.
              </h1>
            </div>
          </div>
          <div className="w-fit xs:flex xs:gap-x-4 lg:block">
            <span className="lg:text-[40px] bg-blend-screen lg:bg-white xs:bg-gray-300 xs:h-fit xs:p-2 xs:rounded-full xs:text-[15px]">
              💡
            </span>
            <div className="">
              <h1 className="lg:text-[27px] font-medium">
                Weekly/Monthly Reports
              </h1>
              <h1 className="lg:w-[75%] lg:pt-5 xs:pt-[5px] xs:text-[#6b7280] lg:text-[16px] xs:text-[13px]">
                Set budgets for categories like food or rent, and get alerts
                before you overspend
              </h1>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-fit xs:flex xs:gap-x-4 lg:block">
            <span className="lg:text-[40px] bg-blend-screen lg:bg-white xs:bg-gray-300 xs:h-fit xs:p-2 xs:rounded-full xs:text-[15px]">
              🔒
            </span>
            <div className="">
              <h1 className="lg:text-[27px] font-medium">Secure & Private</h1>
              <h1 className="lg:w-[75%] lg:pt-5 xs:pt-[5px] xs:text-[#6b7280] lg:text-[16px] xs:text-[13px]">
                Bank-level encryption keeps your data safe. No ads, no selling
                your info.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFeatures;
