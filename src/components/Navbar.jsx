import React, { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({
  scrollToSection,
  homeSectionRef,
  featureSectionRef,
  GuideSectionRef,
  ProofSectionRef,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState();

  const handleMobileMenuClick = (ref) => {
    scrollToSection(ref);
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    if (window.location.pathname == "/") {
      setIsHome(true);
    }
  }, []);

  return (
    <div className="">
      <nav className="lg:py-4 lg:px-16 xs:py-3 xs:px-5 fixed top-0 left-0 w-full z-50 bg-white lg:shadow-md">
        <div className="flex justify-between items-center">
          <div className="lg:text-[27px] xs:text-[20px] font-bold">
            Track<span className="text-green-600">lytic</span>
          </div>

          {/* Desktop Navigation */}

          <div className="lg:flex gap-x-10 xs:hidden items-center">
            <Link to="/">
              <button
                className="text-[17px] font-medium cursor-pointer hover:text-green-600 transition-colors"
                onClick={() => scrollToSection(homeSectionRef)}
              >
                Home
              </button>
            </Link>

            <button
              className={`text-[17px] font-medium cursor-pointer hover:text-green-600 transition-colors ${
                isHome ? "" : "hidden"
              }`}
              onClick={() => scrollToSection(featureSectionRef)}
            >
              Features
            </button>
            <button
              className={`text-[17px] font-medium cursor-pointer hover:text-green-600 transition-colors ${
                isHome ? "" : "hidden"
              }`}
              onClick={() => scrollToSection(ProofSectionRef)}
            >
              What Our Clients Say
            </button>
            <button
              className={`text-[17px] font-medium cursor-pointer hover:text-green-600 transition-colors ${
                isHome ? "" : "hidden"
              }`}
              onClick={() => scrollToSection(GuideSectionRef)}
            >
              How it works
            </button>
            <Link to="/auth/">
              <button
                className={`bg-green-600 border-2 cursor-pointer text-white py-2 px-4 rounded-xl text-[15px] hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 transition-colors ${
                  isHome ? "" : "hidden"
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xs:block lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IoClose className="w-6 h-6 transform transition-transform duration-300 hover:rotate-90" />
            ) : (
              <TbMenuDeep className="w-6 h-6 transform transition-transform duration-300 hover:rotate-180" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Animated */}
        <div
          className={`
          lg:hidden 
          overflow-hidden 
          shadow-2xl 
          rounded-b-lg
          transition-all duration-1000 ease-in-out 
          ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }
          ${!isMobileMenuOpen ? "invisible" : "visible"}
        `}
        >
          <div className="bg-white py-4 px-5 ">
            <div className="flex flex-col space-y-1">
              <button
                className="text-[15px] font-medium py-2 text-left hover:text-green-600 transition-colors transform hover:translate-x-2"
                onClick={() => handleMobileMenuClick(homeSectionRef)}
              >
                Home
              </button>
              <button
                className="text-[15px] font-medium py-2 text-left hover:text-green-600 transition-colors transform hover:translate-x-2"
                onClick={() => handleMobileMenuClick(featureSectionRef)}
              >
                Features
              </button>
              <button
                className="text-[15px] font-medium py-2 text-left hover:text-green-600 transition-colors transform hover:translate-x-2"
                onClick={() => handleMobileMenuClick(ProofSectionRef)}
              >
                What Our Clients Say
              </button>
              <button
                className="text-[15px] font-medium py-2 text-left hover:text-green-600 transition-colors transform hover:translate-x-2"
                onClick={() => handleMobileMenuClick(GuideSectionRef)}
              >
                How it works
              </button>
              <Link to="/auth/">
                <button className="bg-green-600 text-white py-[7px] rounded-xl text-[15px] w-full hover:bg-[#a53836] transition-colors mt-2 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
