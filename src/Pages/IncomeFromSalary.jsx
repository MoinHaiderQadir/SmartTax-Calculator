// src/pages/IncomeFromSalary.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const IncomeFromSalary = ({ theme, setTheme }) => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [annualIncome, setAnnualIncome] = useState(null);
  const [tax, setTax] = useState(null);
  const [monthlyTax, setMonthlyTax] = useState(null);
  const [incomeBracket, setIncomeBracket] = useState('');
  const navigate = useNavigate();
  const calculateTax = () => { const annual = monthlyIncome * 12; setAnnualIncome(annual); let calculatedTax = 0; let bracket = ''; if (annual <= 600000) { calculatedTax = 0; bracket = 'Below 600,000'; } else if (annual <= 1200000) { calculatedTax = (annual - 600000) * 0.05; bracket = '600,000 to 1,200,000'; } else if (annual <= 2200000) { calculatedTax = 30000 + (annual - 1200000) * 0.15; bracket = '1,200,000 to 2,200,000'; } else if (annual <= 3200000) { calculatedTax = 180000 + (annual - 2200000) * 0.25; bracket = '2,200,000 to 3,200,000'; } else if (annual <= 4100000) { calculatedTax = 430000 + (annual - 3200000) * 0.30; bracket = '3,200,000 to 4,100,000'; } else { calculatedTax = 700000 + (annual - 4100000) * 0.35; bracket = 'Exceeding 4,100,000'; } setTax(calculatedTax); setMonthlyTax(calculatedTax / 12); setIncomeBracket(bracket); };
  
  const resetCalculator = () => {
    setMonthlyIncome('');
    setAnnualIncome(null);
    setTax(null);
    setMonthlyTax(null);
    setIncomeBracket('');
  };

  // Define dynamic classes based on the theme for adaptive styling
  const bgClass = theme === 'light' ? 'bg-teal-100' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100';
  const cardBgClass = theme === 'light' ? 'bg-teal-300 border-gray-500' : theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-200';
  const textClass = theme === 'light' ? 'text-gray-800' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const inputBgClass = theme === 'light' ? 'bg-gray-100' : theme === 'dark' ? 'bg-gray-600' : 'bg-blue-50';
  const inputTextClass = theme === 'light' ? 'text-gray-900' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const buttonBgClass = theme === 'light' ? 'bg-teal-500 hover:bg-teal-700' : theme === 'dark' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-indigo-500 hover:bg-indigo-600';
  const buttonTextClass = 'text-white';

  return (
    <div className={`min-h-screen flex flex-col ${bgClass}`}>
      <div className="flex justify-start p-4">
        <FaHome className={`text-2xl cursor-pointer ${textClass} `} onClick={() => navigate('/')} />
      </div>
      <div className="flex justify-end p-4">
        <button
          className={`
            ${buttonBgClass} ${buttonTextClass} font-semibold px-6 py-3 rounded-lg 
            animate-pulse transition-transform duration-300 ease-in-out
          `}
          onClick={() => navigate('/info/salary')}
        >
          Info
        </button>
      </div>
      <main className="flex-grow flex items-center justify-center py-10">
        <div className={`card ${cardBgClass} shadow-xl w-96 p-6 rounded-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Income from Salary</h2>
          <input
            type="number"
            placeholder="Enter your monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className={`input input-bordered w-full mb-4 ${inputBgClass} ${inputTextClass} border border-gray-300 rounded-lg px-2 py-2`}
          />
          <button
            onClick={calculateTax}
            className={`
              btn w-full mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded 
              transition-transform duration-300 ease-in-out hover:scale-105
            `}
          >
            Submit
          </button>
          <button
            onClick={resetCalculator}
            className={`
              btn w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded 
              transition-transform duration-300 ease-in-out hover:scale-105
            `}
          >
            Reset
          </button>
          {annualIncome !== null && (
            <div className={`mt-4 ${textClass}`}>
              <p>Annual Income: {annualIncome}</p>
              <p>Income Bracket: {incomeBracket}</p>
              <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
              <p>Total Annual Tax: {tax.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>
      <footer className="py-4">
        {/* Add any footer content or just spacing */}
      </footer>
    </div>
  );
};

export default IncomeFromSalary;
