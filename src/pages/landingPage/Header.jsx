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
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-[50] font-sans">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <span className="text-2xl font-extrabold text-green-600 whitespace-nowrap">
            GreenBin
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 w-full md:w-auto md:flex flex-col md:flex-row bg-white md:bg-transparent shadow-md md:shadow-none mt-2 md:mt-0 z-50`}
        >
          {menuItems.map((menu) => (
            <div key={menu.title} className="relative md:group">
              <button
                onClick={() => toggleDropdown(menu.title)}
                className="flex items-center w-full px-4 py-2 font-bold text-gray-800 hover:bg-green-100 rounded md:rounded-none transition duration-200"
              >
                {menu.title}
                <svg
                  className="ml-1 w-4 h-4 transform md:group-hover:rotate-180 transition-transform duration-200"
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
              {/* Dropdown Items */}

              <div
                className={`
    ${
      isMobileMenuOpen
        ? openDropdown === menu.title
          ? "block"
          : "hidden"
        : "hidden"
    }
    md:block absolute left-0 mt-0 md:mt-2 w-full md:w-56 bg-white md:rounded-lg shadow-md z-50 opacity-0 md:group-hover:opacity-100 pointer-events-none md:group-hover:pointer-events-auto transition-all duration-200
  `}
              >
                {menu.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition space-x-2"
                  >
                    <item.icon className="w-4 h-4 text-green-500" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Auth Button */}
        <div className="hidden md:block">
          <Link to="/authentication/LoginPage">
            <button className="border-2 border-green-500 text-green-600 font-semibold rounded-2xl px-4 py-1.5 hover:bg-green-600 hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const menuItems = [
  {
    title: "Carbon Registry",
    items: [
      {
        label: "Register",
        to: "/GreenCarbonPoints/GreenCarbon",
        icon: FileText,
      },
      {
        label: "Trade",
        to: "/GreenCarbonPoints/OtherServices/DashBoard",
        icon: Globe,
      },
    ],
  },
  {
    title: "Idea Safari",
    items: [
      { label: "Apply Now", to: "/ideaSafari/ApplyNow", icon: Lightbulb },
      { label: "Discover More", to: "/ideaSafari/IdeaSafari", icon: BookOpen },
    ],
  },
  {
    title: "Climate Intelligence",
    items: [
      {
        label: "Discover GreenBins",
        to: "/greenAIBins/wasteManagement",
        icon: Globe,
      },
      {
        label: "Waste Fellowship",
        to: "/wasteFellowship/AboutFellowship",
        icon: Users,
      },
    ],
  },
  {
    title: "Research",
    items: [
      {
        label: "Green Education",
        to: "/ResearchRepo/ResearchRepo",
        icon: BookOpen,
      },
      { label: "Green Blogs", to: "/ResearchRepo/Blogs", icon: Brain },
      { label: "Research Labs", to: "/ResearchRepo/ResearchLabs", icon: Leaf },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help Center",
        to: "/ResearchRepo/HelpCenter",
        icon: HelpCircle,
      },
      { label: "Our Team", to: "/OurTeam", icon: BadgeCheck },
    ],
  },
];

export default Header;
