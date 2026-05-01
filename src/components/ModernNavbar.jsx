import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartLine, FaBars, FaXmark } from "react-icons/fa6";

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        navRef.current.offsetHeight + "px",
      );
    }
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      ref={navRef}
      className="sticky top-0 w-full z-50 bg-white border-b border-gray-300 "
    >
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaChartLine className="text-white w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl text-gray-900 truncate">
              Tracklytic
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link to="/auth/">
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 lg:px-6 py-2 rounded-lg font-medium text-sm lg:text-base transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-gray-100 py-3 sm:py-4 space-y-2 sm:space-y-4  px-4 sm:px-6 absolute left-0 z-[60] bg-white w-full "
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900 font-medium text-xs sm:text-sm py-2"
              >
                {link.label}
              </a>
            ))}
            <Link to="/auth/">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm transition-all  mb-2">
                Get Started
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
