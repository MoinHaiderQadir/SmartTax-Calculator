// src/pages/IncomeFromCapitalGain.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const IncomeFromCapitalGain = ({ theme }) => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);
  const [capitalGainOption, setCapitalGainOption] = useState('');
  const [acquisitionPeriod, setAcquisitionPeriod] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [userType, setUserType] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const navigate = useNavigate();

  const bgClass = theme === 'light' ? 'bg-teal-100' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100';
  const cardBgClass = theme === 'light' ? 'bg-teal-300 border-gray-500' : theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-200';
  const textClass = theme === 'light' ? 'text-gray-800' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const inputBgClass = theme === 'light' ? 'bg-gray-100' : theme === 'dark' ? 'bg-gray-600' : 'bg-blue-50';
  const inputTextClass = theme === 'light' ? 'text-gray-900' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const buttonBgClass = theme === 'light' ? 'bg-teal-500 hover:bg-teal-700' : theme === 'dark' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-indigo-500 hover:bg-indigo-600';
  const buttonTextClass = 'text-white';

  // Function to calculate tax for capital gain income
  const calculateTax = () => {
    let taxRate = 0;

    // Tax Rate for Capital Gain Option 1 based on holding period
    if (capitalGainOption === 'Capital Gains on Disposal of Securities') {
      switch (holdingPeriod) {
        case 'Where the holding period does not exceed one year':
          taxRate = 15; // 15% for this holding period
          break;
        case 'Where the holding period exceeds one year but does not exceed two years':
          taxRate = 12.5;
          break;
        case 'Where the holding period exceeds two years but does not exceed three years':
          taxRate = 10;
          break;
        case 'Where the holding period exceeds three years but does not exceed four years':
          taxRate = 7.5;
          break;
        case 'Where the holding period exceeds four years but does not exceed five years':
          taxRate = 5;
          break;
        case 'Where the holding period exceeds five years but does not exceed six years':
          taxRate = 2.5;
          break;
        case 'Where the holding period exceeds six years':
          taxRate = 0;
          break;
        case 'Future commodity contracts entered into by members of Pakistan Mercantile Exchange':
          taxRate = 5;
          break;
        default:
          taxRate = 0;
          break;
      }
    }

    // Tax Rate for Capital Gain Option 2 based on acquisition period
    if (capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)') {
      switch (acquisitionPeriod) {
        case 'the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022':
          taxRate = 12.5;
          break;
        case 'the securities are acquired before the first day of July, 2013':
          taxRate = 0;
          break;
        default:
          taxRate = 0;
          break;
      }
    }

    // Tax Rate for Capital Gain Option 3 based on user type and investment type
    if (capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3') {
      if (
        investmentType === 'mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)' ||
        investmentType === 'mutual fund or a collective investment scheme or a REIT scheme (Other Fund)'
      ) {
        taxRate = 15;
      } else if (investmentType === 'if dividend receipts of the fund are less than capital gains') {
        if (userType === 'Company') {
          taxRate = 25;
        } else if (userType === 'Individual' || userType === 'AOP') {
          taxRate = 15;
        }
      }
    }

    // Calculate annual and monthly tax based on user input income and tax rate
    const annualTax = income * (taxRate / 100);
    const monthlyTax = annualTax / 12;

    // Set the calculated values for display
    setTax({ annualTax, monthlyTax, taxRate });
  };

  // Function to reset all fields
  const resetFields = () => {
    setIncome('');
    setTax(null);
    setCapitalGainOption('');
    setAcquisitionPeriod('');
    setHoldingPeriod('');
    setUserType('');
    setInvestmentType('');
  };

  return (
    <div className={`min-h-screen flex flex-col ${bgClass}`}>
      {/* Home Icon */}
      <div className="flex justify-start p-4">
        <FaHome
          className="text-2xl cursor-pointer text-blue-500"
          onClick={() => navigate('/')}
        />
      </div>

      {/* Info Button */}
      <div className="flex justify-end p-4">
        <button
          className={`btn ${buttonBgClass} ${buttonTextClass} font-semibold px-6 py-3 rounded-lg  animate-pulse transition-transform duration-300 ease-in-out`}
          onClick={() => navigate('/info/capital-gain')}
        >
          Info
        </button>
      </div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className={`card ${cardBgClass} shadow-xl w-96 p-6 ${textClass}`}>
          <h2 className="text-2xl font-bold mb-4">Income from Capital Gain</h2>

          {/* Capital Gain Option Selection */}
          <select
            value={capitalGainOption}
            onChange={(e) => setCapitalGainOption(e.target.value)}
            className={`select select-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
          >
            <option value="" disabled>Select Capital Gain Option</option>
            <option value="Capital Gains on Disposal of Securities">Capital Gains on Disposal of Securities</option>
            <option value="Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)">Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)</option>
            <option value="Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3">Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3</option>
          </select>

          {/* Acquisition Period Selection for Option 2 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)' && (
            <select
              value={acquisitionPeriod}
              onChange={(e) => setAcquisitionPeriod(e.target.value)}
              className={`select select-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Acquisition Period</option>
              <option value="the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022">
                the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022
              </option>
              <option value="the securities are acquired before the first day of July, 2013">
                the securities are acquired before the first day of July, 2013
              </option>
            </select>
          )}

          {/* Holding Period Selection for Option 1 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities' && (
            <select
              value={holdingPeriod}
              onChange={(e) => setHoldingPeriod(e.target.value)}
              className={`select select-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Holding Period</option>
              <option value="Where the holding period does not exceed one year">Where the holding period does not exceed one year</option>
              <option value="Where the holding period exceeds one year but does not exceed two years">Where the holding period exceeds one year but does not exceed two years</option>
              <option value="Where the holding period exceeds two years but does not exceed three years">Where the holding period exceeds two years but does not exceed three years</option>
              <option value="Where the holding period exceeds three years but does not exceed four years">Where the holding period exceeds three years but does not exceed four years</option>
              <option value="Where the holding period exceeds four years but does not exceed five years">Where the holding period exceeds four years but does not exceed five years</option>
              <option value="Where the holding period exceeds five years but does not exceed six years">Where the holding period exceeds five years but does not exceed six years</option>
              <option value="Where the holding period exceeds six years">Where the holding period exceeds six years</option>
              <option value="Future commodity contracts entered into by members of Pakistan Mercantile Exchange">
                Future commodity contracts entered into by members of Pakistan Mercantile Exchange
              </option>
            </select>
          )}

          {/* User Type Selection for Option 3 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3' && (
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className={`select select-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select User Type</option>
              <option value="Individual">Individual</option>
              <option value="AOP">AOP</option>
              <option value="Company">Company</option>
            </select>
          )}

          {/* Investment Type Selection for Option 3 */}
          {userType && (
            <select
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
              className={`select select-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Investment Type</option>
              <option value="mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)">
                mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)
              </option>
              <option value="mutual fund or a collective investment scheme or a REIT scheme (Other Fund)">
                mutual fund or a collective investment scheme or a REIT scheme (Other Fund)
              </option>
              <option value="if dividend receipts of the fund are less than capital gains">
                if dividend receipts of the fund are less than capital gains
              </option>
            </select>
          )}

          {/* Income Input */}
          <input
            type="number"
            placeholder="Enter your capital gain income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`input input-bordered w-full mb-4 ${inputBgClass} ${inputTextClass}`}
          />

          {/* Calculate Tax Button */}
          <button onClick={calculateTax} className={`btn ${buttonBgClass} ${buttonTextClass} w-full mb-2`}>
            Calculate Tax
          </button>

          {/* Reset Button */}
          <button onClick={resetFields} className={`btn btn-secondary w-full ${buttonBgClass} ${buttonTextClass}`}>
            Reset
          </button>

          {/* Display Calculated Tax */}
          {tax !== null && (
            <div className="mt-4">
              <p>Annual Tax: {tax.annualTax.toFixed(2)}</p>
              <p>Monthly Tax: {tax.monthlyTax.toFixed(2)}</p>
              <p>Tax Rate: {tax.taxRate}%</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IncomeFromCapitalGain;
