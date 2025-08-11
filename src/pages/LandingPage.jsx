import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/Group 1.png";
import Coint from "../assets/Coint.png";
import Donut from "../assets/Donut.png";
import LandingPageFeatures from "../components/Landing Page/LandingPageFeatures";
import LandingPageSocialProof from "../components/Landing Page/LandingPageSocialProof";
import LandingPageGuide from "../components/Landing Page/LandingPageGuide";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const homeSectionRef = useRef(null);
  const featureSectionRef = useRef(null);
  const ProofSectionRef = useRef(null);
  const GuideSectionRef = useRef(null);

  // Function to handle scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mb-2">
      <Navbar
        scrollToSection={scrollToSection}
        homeSectionRef={homeSectionRef}
        featureSectionRef={featureSectionRef}
        ProofSectionRef={ProofSectionRef}
        GuideSectionRef={GuideSectionRef}
      />
      <div
        className="lg:flex xs:block xs:w-[100%] xs:px-5 justify-center lg:pt-30 xs:pt-20"
        ref={homeSectionRef}
      >
        <div className="lg:max-w-[30%] xs:w-[100%]">
          <h1 className="lg:text-5xl  xs:text-[34px]  font-bold  lg:leading-15 xs:leading-11">
            Take Control of Your{" "}
            <span className="text-green-600">Finances</span>
          </h1>
          <h1 className="lg:pt-5 xs:pt-2 lg:text-[16px] xs:text-[13px]">
            Effortlessly track your expenses, manage your budget, and achieve
            your financial goals. With Tracklytic, stay on top of every
            penny—anytime, anywhere.
          </h1>
          <Link to="/auth/">
            <button className="bg-green-600 cursor-pointer text-white py-3 px-6 rounded-xl lg:text-[18px] xs:text-[13px] lg:mt-7 xs:mt-5 hover:scale-125 transform duration-500">
              Get Started for Free
            </button>
          </Link>
        </div>
        <div className="w-fit relative xs:mt-10 lg:mt-0">
          <img
            src={hero}
            alt=""
            className="  lg:w-[150%] lg:h-[500px] xs:w-[100%] xs:h-[350px]"
          />
          <img
            src={Coint}
            alt=""
            className="absolute lg:left-15 lg:top-0 lg:h-[95px] xs:h-[85px] xs:-top-5 xs:left-10"
          />
          <img
            src={Donut}
            alt=""
            className="absolute lg:left-73 lg:top-15 lg:h-[95px] xs:h-[85px] xs:top-5 xs:left-50"
          />
        </div>
      </div>
      <LandingPageFeatures featureSectionRef={featureSectionRef} />
      <LandingPageSocialProof ProofSectionRef={ProofSectionRef} />
      <LandingPageGuide GuideSectionRef={GuideSectionRef} />
      <h1 className="pt-16 text-center lg:text-[17px] xs:text-[12px]">
        Budget Smarter, Stress Less – Your Wallet Will Thank You
      </h1>
    </div>
  );
};

export default LandingPage;
