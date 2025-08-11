import React from "react";

const LandingPageGuide = ({ GuideSectionRef }) => {
  return (
    <div className="lg:px-16 xs:px-1 mt-20" ref={GuideSectionRef}>
      <h1 className="text-center lg:text-[35px] xs:text-[25px] font-bold">
        How It Works: Master Your Money in 3 Simple{" "}
        <span className="text-green-600">Steps</span>
      </h1>
      <div className=" lg:flex xs:space-y-5 gap-x-20 pt-10">
        <div className="lg:w-[800px] p-5 lg:mx-0 xs:mx-3 rounded-2xl g-[#fefefe] shadow-2xl shadow-[#cccccc] hover:scale-110 duration-700 cursor-pointer">
          <div className="flex lg:gap-x-5 xs:gap-x-4 items-center">
            <h1 className="lg:text-[23px] xs:text-[15px] bg-[#7ebf41] w-fit lg:px-4 xs:px-[11px] py-1 text-white rounded-full font-bold">
              1
            </h1>
            <h1 className="lg:text-[20px] xs:text-[15px] font-bold ">
              Sign Up in Seconds
            </h1>
          </div>
          <div className="lg:leading-7 lg:text-[16px] xs:text-[13px] font-medium">
            <h1 className="pt-5">
              Get started effortlessly—no credit card, no long forms. Just enter
              your email and you're in! Your personal expense tracker is only a
              few clicks away. Safe, secure, and super fast. Start managing your
              money better today—signing up takes less than a minute.
            </h1>
          </div>
        </div>
        <div className="lg:w-[800px] p-5 lg:mx-0 xs:mx-3 rounded-2xl g-[#fefefe] shadow-2xl shadow-[#cccccc] hover:scale-110 duration-700 cursor-pointer">
          <div className="flex lg:gap-x-5 xs:gap-x-4 items-center">
            <h1 className="lg:text-[23px] xs:text-[15px] bg-[#41bdbf] w-fit lg:px-4 xs:px-[11px] py-1 text-white rounded-full font-bold">
              2
            </h1>
            <h1 className="lg:text-[20px] xs:text-[15px] font-bold">
              Add Expenses
            </h1>
          </div>
          <div className="lg:leading-7 lg:text-[16px] xs:text-[13px] font-medium">
            <h1 className="pt-5">
              Track your spending your way: enter expenses manually, sync with
              your bank for automatic imports, or snap a photo of a receipt and
              let our smart OCR handle the rest. Whether it’s your morning
              coffee or monthly bills, logging expenses has never been easier.
            </h1>
          </div>
        </div>
        <div className="lg:w-[800px] p-5 lg:mx-0 xs:mx-3 rounded-2xl g-[#fefefe] shadow-2xl shadow-[#cccccc] hover:scale-110 duration-700 cursor-pointer">
          <div className="flex lg:gap-x-5 xs:gap-x-4 items-center">
            <h1 className="lg:text-[23px] xs:text-[15px] bg-[#8241bf] w-fit lg:px-4 xs:px-[11px] py-1 text-white rounded-full font-bold">
              3
            </h1>
            <h1 className="lg:text-[20px] xs:text-[15px] font-bold">
              See Insights
            </h1>
          </div>
          <div className="lg:leading-7 lg:text-[16px] xs:text-[13px] font-medium">
            <h1 className="pt-5">
              Instantly get a clear picture of where your money goes. Visualize
              spending patterns with charts, set budget goals, and spot habits
              you can improve. Smart insights help you plan ahead, avoid
              overspending, and save more—without lifting a spreadsheet.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageGuide;
