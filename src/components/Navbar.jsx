// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaCalculator, FaEllipsisH, FaSun, FaMoon, FaBuilding } from 'react-icons/fa';

const Navbar = ({ setTheme, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Theme-based styling classes
  const buttonBgClass = theme === 'light' ? 'bg-teal-500 hover:bg-teal-700' : theme === 'dark' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-indigo-500 hover:bg-indigo-600';
  const buttonTextClass = 'text-white';

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsExpanded(false); // Collapse the button after a selection
  };

  // Toggle button expansion
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`navbar p-3 sm:p-4 transition-colors duration-500 flex items-center justify-between ${theme === 'light' ? 'bg-teal-400' : theme === 'dark' ? 'bg-gray-900' : 'bg-blue-900'}`}>
      {/* Logo and title */}
      <div className="flex items-center">
        <FaCalculator className="text-white text-xl sm:text-2xl mr-2" />
        <span className="text-white text-md sm:text-lg font-semibold">TaxCalculator</span>
      </div>

      {/* Animated Button */}
      <div className="relative">
        <button
          onClick={toggleExpand}
          className={`rounded-full ${buttonBgClass} ${buttonTextClass} p-2 sm:p-3 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
          style={{ width: '48px', height: '48px' }} // Smaller button size for better responsiveness
        >
          <FaEllipsisH className="text-lg sm:text-xl" />
        </button>

        {/* Theme options */}
        {isExpanded && (
          <div className="absolute right-0 mt-2 sm:mt-3 flex flex-col gap-1 sm:gap-2 p-2 bg-white rounded-lg shadow-md transition-all duration-500">
            <button
              onClick={() => handleThemeChange('light')}
              className="p-2 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center"
            >
              <FaSun className="text-yellow-700" />
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center"
            >
              <FaMoon className="text-gray-300" />
            </button>
            <button
              onClick={() => handleThemeChange('corporate')}
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
            >
              <FaBuilding className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
