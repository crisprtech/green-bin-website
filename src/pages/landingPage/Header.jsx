import React from "react";
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
} from "lucide-react";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-xs z-[50] font-sans">
      <div className="container  flex justify-between items-baseline py-3 px-25">
        {/* Logo and Brand */}
        <Link to="/" className="items-center space-x-1">
          <span className="text-2xl font-extrabold text-green-600 tracking-tight whitespace-nowrap">
            GreenBin
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center ">
          <Dropdown title="Carbon Registry">
            <DropdownItem to="/GreenCarbonPoints/GreenCarbon" icon={FileText}>
              Register
            </DropdownItem>
            <DropdownItem
              to="/GreenCarbonPoints/OtherServices/DashBoard"
              icon={Globe}
            >
              Trade
            </DropdownItem>
          </Dropdown>

          <Dropdown title="Idea Safari">
            <DropdownItem to="/ideaSafari/ApplyNow" icon={Lightbulb}>
              Apply Now
            </DropdownItem>
            <DropdownItem to="/ideaSafari/IdeaSafari" icon={BookOpen}>
              Discover More
            </DropdownItem>
          </Dropdown>

          <Dropdown title="Climate Intelligence">
            <DropdownItem to="/greenAIBins/wasteManagement" icon={Globe}>
              Discover GreenBins
            </DropdownItem>
            <DropdownItem to="/wasteFellowship/AboutFellowship" icon={Users}>
              Waste Fellowship
            </DropdownItem>
          </Dropdown>

          <Dropdown title="Research">
            <DropdownItem to="/ResearchRepo/ResearchRepo" icon={BookOpen}>
              Green Education
            </DropdownItem>
            <DropdownItem to="/ResearchRepo/Blogs" icon={Brain}>
              Green Blogs
            </DropdownItem>
            <DropdownItem to="/ResearchRepo/ResearchLabs" icon={Leaf}>
              Research Labs
            </DropdownItem>
          </Dropdown>

          <Dropdown title="Support">
            <DropdownItem to="/ResearchRepo/HelpCenter" icon={HelpCircle}>
              Help Center
            </DropdownItem>
            <DropdownItem to="/OurTeam" icon={BadgeCheck}>
              Our Team
            </DropdownItem>
          </Dropdown>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-1">
          <Link to="/authentication/LoginPage">
            <button className="border-2 border-green-500 rounded-2xl text-green-600 font-semibold rounded px-4 py-1.5 hover:bg-green-500 hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Dropdown Wrapper
const Dropdown = ({ title, children }) => {
  return (
    <div className="relative group">
      <button className="inline-flex items-center px-4 py-2 font-bold text-gray-800 hover:bg-green-100 rounded transition duration-200 whitespace-nowrap">
        {title}
        <svg
          className="ml-1 w-4 h-4 transition-transform transform group-hover:rotate-180"
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
      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xs hidden group-hover:block z-20">
        {children}
      </div>
    </div>
  );
};

// Dropdown Item with Icon
const DropdownItem = ({ to, children, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150 space-x-2"
    >
      {Icon && <Icon className="w-4 h-4 text-green-500" />}
      <span>{children}</span>
    </Link>
  );
};

export default Header;
