import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null); // Dropdown state for mobile menu
  const mobileMenuRef = useRef(null); // Create a ref for mobile menu

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            LM
          </div>
          <span
            className={`text-2xl font-bold ml-1 transition-all duration-300 ease-in-out ${
              isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Club.
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/privacy-report">Privacy Report</a>
          </li>
          <li>
            <a href="/privacy-statement">Privacy Statement</a>
          </li>
          {/* <li>
            <a href="/login">Login</a>
          </li> */}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-gray-800" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef} // Attach the ref to the mobile menu container
          className={`md:hidden fixed top-0 left-0 w-[70%] h-full bg-white dark:bg-[#000300] z-20 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }`}
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold">LM Club</h1>
            <ul className="mt-4 space-y-4">
              {/* Home */}

              <li className="p-4 border-b border-gray-600">
                <a
                  href="/"
                  className="flex items-center justify-between"
                >
                  Privacy
                </a>
              </li>

              {/* Privacy */}
              <li className="p-4 border-b border-gray-600">
                <a
                  href="/privacy-report"
                  className="flex items-center justify-between"
                >
                  Privacy Report
                </a>
              </li>

              <li className="p-4 border-b border-gray-600">
                <a
                  href="/privacy-statement"
                  className="flex items-center justify-between"
                >
                  Privacy Statement
                </a>
              </li>

              {/* Login */}
              <li className="p-4 border-b border-gray-600">
                <a
                  href="/login"
                  className="flex items-center text-center font-medium text-white rounded-full justify-center p-2 bg-mainColor"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
