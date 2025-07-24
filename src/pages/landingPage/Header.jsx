import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Globe,
  BookOpen,
  Users,
  Brain,
  HelpCircle,
  BadgeCheck,
  FileText,
  Lightbulb,
  Menu,
} from "lucide-react";

import logo from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-xs z-[50] font-sans">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-10">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="GreenBin Logo" className="w-18 h-18" />
          <span className="text-2xl font-extrabold text-green-600 tracking-tight whitespace-nowrap">
            GreenBin
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-9 h-9 text-gray-800  mr-10" />
        </button>

        {/* Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute md:static top-10 left-0 w-full md:w-auto bg-white md:flex md:items-center shadow-xs md:shadow-none z-40`}
        >
          <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-4">
            <Dropdown
              title="Carbon Registry"
              isOpen={activeDropdown === "Carbon Registry"}
              onToggle={() => handleDropdownToggle("Carbon Registry")}
            >
              <DropdownItem to="/GreenCarbonPoints/GreenCarbon" icon={FileText}>
                GreenBin Carbon Registry System
              </DropdownItem>
              <DropdownItem
                to="/GreenCarbonPoints/OtherServices/DashBoard"
                icon={Globe}
              >
                Explore Carbon Markets
              </DropdownItem>
              <DropdownItem to="/GreenCarbonPoints/GreenCarbonDAO" icon={Globe}>
                Participate in GreenBin DAO
              </DropdownItem>
              <DropdownItem
                to="/GreenCarbonPoints/OtherServices/DashBoard"
                icon={Globe}
              >
                Carbon Security Exchange
              </DropdownItem>

              <DropdownItem to="/GreenCarbonPoints/GreenCarbon" icon={FileText}>
                Get Access to GreenBin Assets and Bonds
              </DropdownItem>
            </Dropdown>

            <Dropdown
              title="Idea Safari"
              isOpen={activeDropdown === "Idea Safari"}
              onToggle={() => handleDropdownToggle("Idea Safari")}
            >
              <DropdownItem to="/ideaSafari/ApplyNow" icon={Lightbulb}>
                Access Idea Safari Platform
              </DropdownItem>
              <DropdownItem to="/ideaSafari/IdeaSafari" icon={BookOpen}>
                Check Eligibility criteria
              </DropdownItem>
              <DropdownItem to="/wasteFellowship/AboutFellowship" icon={Users}>
                Idea Safari Partnerships
              </DropdownItem>
            </Dropdown>

            <Dropdown
              title="GreenBin Insider"
              isOpen={activeDropdown === "Climate Intelligence"}
              onToggle={() => handleDropdownToggle("Climate Intelligence")}
            >
              <DropdownItem to="/greenAIBins/wasteManagement" icon={Globe}>
                Green Programs and Sustainable Projects
              </DropdownItem>
              <DropdownItem to="/wasteFellowship/AboutFellowship" icon={Users}>
                Organization Departments Overview
              </DropdownItem>
              <DropdownItem to="/greenAIBins/wasteManagement" icon={Globe}>
                News,Events and Summits
              </DropdownItem>
              <DropdownItem to="/wasteFellowship/AboutFellowship" icon={Users}>
                Workshops and Climate Bootcamps
              </DropdownItem>
              <DropdownItem to="/wasteFellowship/AboutFellowship" icon={Users}>
                Green Games
              </DropdownItem>
            </Dropdown>

            <Dropdown
              title="Research"
              isOpen={activeDropdown === "Research"}
              onToggle={() => handleDropdownToggle("Research")}
            >
              <DropdownItem to="/ResearchRepo/ResearchRepo" icon={BookOpen}>
                Research Programs and Ipod kits
              </DropdownItem>
              <DropdownItem to="/ResearchRepo/Blogs" icon={Brain}>
                Green Research Articles and Blogs
              </DropdownItem>
              <DropdownItem to="/ResearchRepo/ResearchLabs" icon={Leaf}>
                Research Labs and Consortia
              </DropdownItem>

              <DropdownItem to="/ResearchRepo/ResearchLabs" icon={Leaf}>
                Internship and Ambassador Programs
              </DropdownItem>
            </Dropdown>

            <Dropdown
              title="Support"
              isOpen={activeDropdown === "Support"}
              onToggle={() => handleDropdownToggle("Support")}
            >
              <DropdownItem to="/ResearchRepo/HelpCenter" icon={HelpCircle}>
                Help Center Repository
              </DropdownItem>
              <DropdownItem to="/OurTeam" icon={BadgeCheck}>
                Our Team and Partners
              </DropdownItem>

              <DropdownItem to="/landingPage/ContactUs" icon={BadgeCheck}>
                Visit or Contact Us
              </DropdownItem>
              <DropdownItem to="/Services" icon={Users}>
                Our Services
              </DropdownItem>
              <DropdownItem to="/GreenCarbonPoints/GreenCarbon" icon={FileText}>
                Donate
              </DropdownItem>
            </Dropdown>

            <div className="md:hidden w-full px-4 py-2">
              <Link to="/authentication/LoginPage">
                <button className="w-full border-2 border-green-500 rounded-2xl text-green-600 font-semibold px-4 py-1.5 hover:bg-green-500 hover:text-white transition duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:flex mr-60">
          <Link to="/authentication/LoginPage">
            <button className="border-2 border-green-500 rounded-2xl text-green-600 font-semibold px-4 py-1.5 hover:bg-green-500 hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="relative w-full md:w-auto group">
      <button
        onClick={onToggle}
        className="flex justify-between md:inline-flex items-center w-full px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 rounded-2xl transition duration-200"
      >
        {title}
        <svg
          className={`ml-1 w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 min-w-[14rem] bg-white rounded-xl shadow-xs z-50 whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ to, children, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-white-50 hover:text-green-700 transition-colors duration-150 space-x-2"
    >
      {Icon && <Icon className="w-4 h-4 text-green-500" />}
      <span>{children}</span>
    </Link>
  );
};

export default Header;
