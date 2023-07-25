import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaVideo,
  FaCog,
  FaBell,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import Logo from "../assets/logo.png"; // Import your logo image

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Add a new function to close the dropdown when clicking outside of it
  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const windowHeight = window.innerHeight;
        const sidebarTopOffset = sidebar.getBoundingClientRect().top;
        sidebar.style.height = `${windowHeight - sidebarTopOffset}px`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick); // Listen for clicks outside the sidebar
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick); // Cleanup the event listener
    };
  }, []);

  return (
    <aside
      className="bg-customColor text-gray-100 fixed top-0 left-0 w-80 overflow-y-auto"
      ref={sidebarRef}
    >
      <div className="p-8">
        {/* Sidebar Header */}
        <Link to="/dash">
          <div className="flex items-center mb-6">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 mx-auto border border-white"
            />
          </div>
        </Link>

        <ul>
          <li className="mb-2 mt-4">
            <Link
              to="/dash"
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/employees"
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaUsers className="mr-2" />
              Employees
            </Link>
          </li>

          {/* Dropdown menu */}
          <li className="mb-2">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaVideo className="mr-2" />
              Video Management{" "}
              {showDropdown ? (
                <FaAngleUp className="ml-auto" />
              ) : (
                <FaAngleDown className="ml-auto" />
              )}
            </button>
            {showDropdown && (
              <ul className="ml-8">
                <li>
                  <Link
                    to="/live-video-feed"
                    className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
                  >
                    <FaVideo className="mr-2" />
                    Live Video Feed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aivideo"
                    className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
                  >
                    <FaVideo className="mr-2" />
                    AI People Detection
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* End of dropdown menu */}

          <li className="mb-2">
            <Link
              to="/alerts"
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaBell className="mr-2" />
              Alerts
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/statistics"
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaChartLine className="mr-2" />
              Statistics
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/settings"
              className="flex items-center text-gray-100 hover:bg-customColorTwo font-semibold px-4 py-2 rounded transition-colors"
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          {/* Add more sidebar options as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
