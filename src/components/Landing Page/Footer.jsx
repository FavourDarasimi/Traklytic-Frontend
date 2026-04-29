import React from "react";
import { FaChartLine } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-white w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <span className="font-bold text-white text-base sm:text-lg">
                Tracklytic
              </span>
            </div>
            <p className="text-xs sm:text-sm">
              Smart personal finance management for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-semibold text-white text-sm sm:text-base">
              Product
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#features" className="hover:text-green-500 transition">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-500 transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-semibold text-white text-sm sm:text-base">
              Company
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-semibold text-white text-sm sm:text-base">
              Legal
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
              © {currentYear} Tracklytic. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 mt-0 order-1 sm:order-2">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
