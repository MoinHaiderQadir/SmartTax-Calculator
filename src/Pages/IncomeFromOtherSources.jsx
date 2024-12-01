// src/pages/IncomeFromOtherSources.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const IncomeFromOtherSources = ({ theme }) => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);
  const navigate = useNavigate();

  // Function to calculate tax for other sources of income
  const calculateTax = () => {
    const calculatedTax = income * 0.18; // Assuming an 18% tax rate for demonstration
    setTax(calculatedTax);
  };

  // Theme-based styling classes
  const bgClass = theme === 'light' ? 'bg-teal-100' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100';
  const cardBgClass = theme === 'light' ? 'bg-teal-300 border-gray-500' : theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-200';
  const textClass = theme === 'light' ? 'text-gray-800' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const inputBgClass = theme === 'light' ? 'bg-gray-100' : theme === 'dark' ? 'bg-gray-600' : 'bg-blue-50';
  const inputTextClass = theme === 'light' ? 'text-gray-900' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const buttonBgClass = theme === 'light' ? 'bg-teal-500 hover:bg-teal-700' : theme === 'dark' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-indigo-500 hover:bg-indigo-600';
  const buttonTextClass = 'text-white';

  return (
    <div className={`min-h-screen flex flex-col ${bgClass}`}>
      {/* Home Icon */}
      <div className="flex justify-start p-4">
        <FaHome
          className={`text-2xl cursor-pointer ${theme === 'dark' ? 'text-orange-400' : 'text-blue-500'}`}
          onClick={() => navigate('/')}
        />
      </div>

      {/* Info Button */}
      <div className="flex justify-end p-4">
        <button
          className={`btn ${buttonBgClass} ${buttonTextClass} font-semibold px-6 py-3 rounded-lg  animate-pulse transition-transform duration-300 ease-in-out `}
          onClick={() => navigate('/info/other-sources')}
        >
          Info
        </button>
      </div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className={`card shadow-xl w-96 p-6 border ${cardBgClass}`}>
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Income from Other Sources</h2>
          <input
            type="number"
            placeholder="Enter your income from other sources"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`input input-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
          />
          <button onClick={calculateTax} className={`btn w-full ${buttonBgClass} ${buttonTextClass}`}>
            Calculate Tax
          </button>
          {tax !== null && <p className={`mt-4 ${textClass}`}>Your calculated tax is: {tax}</p>}
        </div>
      </main>
    </div>
  );
};

export default IncomeFromOtherSources;
