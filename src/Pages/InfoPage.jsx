// src/pages/InfoPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const InfoPage = ({ theme }) => {
  const navigate = useNavigate();
  const { infoType } = useParams();
  const [isExpanded, setIsExpanded] = useState({});

  // Determine text color based on the theme
  const textColor = theme === 'light' ? 'text-black' : theme === 'dark' ? 'text-white' : 'text-gray-800';

  // Toggle collapse state
  const toggleCollapse = (index) => {
    setIsExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Content for different info types
  const infoContent = {
    salary: {
      title: "Income from Salary Information",
      description: [
        {
          range: "Below Rs. 600,000",
          tax: "0%",
          details: "If your annual salary is less than Rs. 600,000, you do not need to pay any tax.",
          
        },
        {
          range: "Rs. 600,000 to Rs. 1,200,000",
          tax: "5% of the amount exceeding Rs. 600,000",
          details: "For incomes in this range, you will be taxed 5% on the amount that exceeds Rs. 600,000.",
        },
        {
          range: "Rs. 1,200,000 to Rs. 2,200,000",
          tax: "Rs. 30,000 + 15% of the exceeding amount",
          details: "For incomes between Rs. 1,200,000 and Rs. 2,200,000, you pay Rs. 30,000 plus 15% of the amount exceeding Rs. 1,200,000.",
        },
        {
          range: "Rs. 2,200,000 to Rs. 3,200,000",
          tax: "Rs. 180,000 + 25% of the exceeding amount",
          details: "For this bracket, the tax is Rs. 180,000 plus 25% of the amount exceeding Rs. 2,200,000.",
        },
        {
          range: "Rs. 3,200,000 to Rs. 4,100,000",
          tax: "Rs. 430,000 + 30% of the amount exceeding Rs. 3,200,000",
          details: "In this range, the tax is Rs. 430,000 plus 30% of the amount exceeding Rs. 3,200,000.",
        },
        {
          range: "Exceeding Rs. 4,100,000",
          tax: "Rs. 700,000 + 35% of the amount exceeding Rs. 4,100,000",
          details: "If your income exceeds Rs. 4,100,000, you will pay Rs. 700,000 plus 35% of the amount exceeding Rs. 4,100,000.",
        },
      ],
    },
    business: {
      title: "Income from Business Information",
      description: [
        {
          range: "Below Rs. 600,000",
          tax: "0%",
          details: "If your business income is less than Rs. 600,000, you do not need to pay any tax.",
        },
        { 
          range: "Rs. 600,000 to Rs. 1,200,000",
          tax: "15% of the amount exceeding Rs. 600,000",
          details: "For incomes in this range, you will be taxed 15% on the amount that exceeds Rs. 600,000.",
        },
        {
          range: "Rs. 1,200,000 to Rs. 1,600,000",
          tax: "Rs. 90,000 + 20% of the amount exceeding Rs. 1,200,000",
          details: "For incomes between Rs. 1,200,000 and Rs. 1,600,000, you pay Rs. 90,000 plus 20% of the amount exceeding Rs. 1,200,000.",
        },
        {
          range: "Rs. 1,600,000 to Rs. 3,200,000",
          tax: "Rs. 170,000 + 30% of the amount exceeding Rs. 1,600,000",
          details: "For this bracket, the tax is Rs. 170,000 plus 30% of the amount exceeding Rs. 1,600,000.",
        },
        {
          range: "Rs. 3,200,000 to Rs. 5,600,000",
          tax: "Rs. 650,000 + 40% of the amount exceeding Rs. 3,200,000",
          details: "In this range, the tax is Rs. 650,000 plus 40% of the amount exceeding Rs. 3,200,000.",
        },
        {
          range: "Exceeding Rs. 5,600,000",
          tax: "Rs. 650,000 + 40% of the amount exceeding Rs. 3,200,000",
          details: "If your income exceeds Rs. 5,600,000, you will pay Rs. 650,000 plus 40% of the amount exceeding Rs. 3,200,000.",
        },
      ],
    },
    property: {
      title: "Income from Property Information",
      description: [
        {
          heading: "1. Rental Income (Rs)",
          range: "Different Rates for Filer and Non-Filer",
          details: (
            <>
              <p>Upto Rs. 300,000: <span className="font-bold">0% (Filer)</span>, <span className="hover:bg-gray-200 p-1 rounded">100% (Non-Filer)</span></p>
              <p>Rs. 300,000 to Rs. 600,000: <span className="font-bold">5% of exceeding amount (Filer)</span>, <span className="hover:bg-gray-200 p-1 rounded">100% of calculated amount (Non-Filer)</span></p>
              <p>Rs. 600,000 to Rs. 2,000,000: <span className="font-bold">Rs. 15,000 + 10% of amount exceeding (Filer)</span>, <span className="hover:bg-gray-200 p-1 rounded">100% of calculated amount (Non-Filer)</span></p>
              <p>Above Rs. 2,000,000: <span className="font-bold">Rs. 155,000 + 25% of exceeding amount (Filer)</span>, <span className="hover:bg-gray-200 p-1 rounded">100% of calculated amount (Non-Filer)</span></p>
            </>
          ),
        },
        {
          heading: "2. Companies - General (First Sch. Part I Div. II)",
          range: "Various Company Tax Rates",
          details: (
            <>
              <p>Small Company: <span className="font-bold">20%</span></p>
              <p>Banking Company: <span className="font-bold">39%</span></p>
              <p>All Other Companies: <span className="font-bold">29%</span></p>
              <p>Alternate Corporate Tax (ACT): <span className="font-bold">17%</span></p>
              <p>Sui Northern Gas, Pakistan Airlines, Poultry Industries: <span className="font-bold">0.75%</span></p>
              <p>Oil Refineries, Motorcycle Dealers, and Oil Marketing Companies: <span className="font-bold">0.5%</span></p>
              <p>Petroleum Agents, Distributors of Pharmaceutical products, FMCG: <span className="font-bold">0.25%</span></p>
              <p>In All Other Cases: <span className="font-bold">1.25%</span></p>
            </>
          ),
        },
        {
          heading: "3. Super Tax Income under section 4C (First Sch. Part I Div. IIB)",
          range: "Tax Rates 2022 & 2023",
          details: (
            <>
              <p>Where income does not exceed Rs. 150 million: <span className="font-bold">0% of the income</span> (2022), <span className="font-bold">0% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 150 million but does not exceed Rs. 200 million: <span className="font-bold">1% of the income</span> (2022), <span className="font-bold">2% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 200 million but does not exceed Rs. 250 million: <span className="font-bold">2% of the income</span> (2022), <span className="font-bold">3% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 250 million but does not exceed Rs. 300 million: <span className="font-bold">3% of the income</span> (2022), <span className="font-bold">4% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 300 million but does not exceed Rs. 350 million: <span className="font-bold">4% of the income</span> (2022), <span className="font-bold">6% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 350 million but does not exceed Rs. 400 million: <span className="font-bold">4% of the income</span> (2022), <span className="font-bold">8% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 400 million but does not exceed Rs. 500 million: <span className="font-bold">4% of the income</span> (2022), <span className="font-bold">10% of the income</span> (2023)</p>
              <p>Where income exceeds Rs. 500 million: <span className="font-bold">4% of the income</span> (2022), <span className="font-bold">10% of the income</span> (2023)</p>
            </>
          ),
        },
        {
          heading: "4. Advance Tax on Seller & Buyer (First Sch. Part IV Div. X & XVIII)",
          range: "Tax Rates for Filers and Non-Filers",
          details: (
            <>
              <p>Seller (Filer): <span className="font-bold">3% to 4% depending on the amount</span></p>
              <p>Seller (Non-Filer): <span className="font-bold">10%</span></p>
              <p>Buyer: <span className="font-bold">12% to 20% depending on the market value</span></p>
            </>
          ),
        },
        {
          heading: "5. Gain on Immovable Property (First Sch. Part I Div. VIII)",
          range: "Tax Rates based on Holding Period",
          details: (
            <>
              <p>Where holding period does not exceed one year: <span className="font-bold">15%</span></p>
              <p>Where holding period exceeds one year but does not exceed two years: <span className="font-bold">12.5%</span></p>
              <p>Where holding period exceeds two years but does not exceed three years: <span className="font-bold">10%</span></p>
              <p>Where holding period exceeds three years but does not exceed four years: <span className="font-bold">7.5%</span></p>
              <p>Where holding period exceeds four years but does not exceed five years: <span className="font-bold">5%</span></p>
              <p>Where holding period exceeds five years but does not exceed six years: <span className="font-bold">2.5%</span></p>
              <p>Where holding period exceeds six years: <span className="font-bold">0%</span></p>
            </>
          ),
        },
      ],
    },


  'capital-gain': {
      title: "Capital Gain Information",
      description: [
        {
          heading: "1. Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)",
          range: "Rate of Tax",
          details: (
            <>
              <p>The securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022: <span className="font-bold">12.5%</span></p>
              <p>The securities are acquired before the first day of July, 2013: <span className="font-bold">0%</span></p>
            </>
          ),
        },
        {
          heading: "2. Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Mutual Funds, REITs",
          range: "Rates for Individual, AOP, and Company",
          details: (
            <>
              <p>Mutual fund or a collective investment scheme or a REIT scheme (Stock Fund): <span className="font-bold">15% (Individual, AOP, Company)</span></p>
              <p>Mutual fund or a collective investment scheme or a REIT scheme (Other Fund): <span className="font-bold">15% (Individual, AOP), 25% (Company)</span></p>
              <p>If dividend receipts of the fund are less than capital gains: <span className="font-bold">15% (Individual, AOP), 20% (Company)</span></p>
            </>
          ),
        },
      ],
    },'other-sources': {
      title: "Income from Other Sources",
      description: [
        {
          heading: "1. Telephone Users (First Sch. Part IV Div. V)",
          range: "Tax Rates",
          details: (
            <>
              <p>Telephone Subscriber (Other than Mobile Phone) exceeding Rs. 1000 monthly bill: <span className="font-bold">10% on exceeding amount</span></p>
              <p>Internet, Mobile telephone, and pre-paid internet or telephone card: <span className="font-bold">15%</span></p>
            </>
          ),
        },
        {
          heading: "2. Tax at Import Stage (First Sch. Part II)",
          range: "Filer vs. Non-Filer",
          details: (
            <>
              <p>Persons importing goods classified in Part I of the Twelfth Sch: <span className="font-bold">1% (Filer)</span>, <span className="font-bold">0% (Non-Filer)</span></p>
              <p>Persons importing goods classified in Part II of the Twelfth Sch: <span className="font-bold">2% (Filer)</span>, <span className="font-bold">0% (Non-Filer)</span></p>
              <p>Persons importing goods classified in Part III of the Twelfth Sch: <span className="font-bold">5.5% (Filer)</span>, <span className="font-bold">0% (Non-Filer)</span></p>
              <p>If the importer is commercial for the goods specified in Part III of the Twelfth Sch: <span className="font-bold">4% (Filer)</span>, <span className="font-bold">0% (Non-Filer)</span></p>
            </>
          ),
        },
        {
          heading: "3. For Real Estate And Commercial Builders (First Sch. Part IIB)",
          range: "Tax Rates by Region",
          details: (
            <>
              <p>Karachi, Lahore, and Islamabad - Commercial Buildings (Any Size): <span className="font-bold">Rs. 250 per Sq. ft</span></p>
              <p>Hyderabad, Sukkur, Multan, Faisalabad, Rawalpindi, Urban Areas (not specified elsewhere) - Commercial Buildings (Any Size): <span className="font-bold">Rs. 230 per Sq. ft</span></p>
              <p>Other Urban Areas - Commercial Buildings (Any Size): <span className="font-bold">Rs. 210 per Sq. ft</span></p>
              <p>Residential Buildings (Upto 3000 Sq Ft): <span className="font-bold">Rs. 80 - Rs. 100 per Sq. ft depending on location</span></p>
              <p>Residential Buildings (3000 Sq Ft and Above): <span className="font-bold">Rs. 110 - Rs. 125 per Sq. ft depending on location</span></p>
            </>
          ),
        },
      ],
    },
  };

  // Default to 'salary' info if the parameter doesn't match  text-xl
  const content = infoContent[infoType] || infoContent['salary'];
  const textClass = theme === 'light' ? 'text-black' : theme === 'dark' ? 'text-gray-100' : 'text-gray-900';

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-teal-200' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-200'}`}>
  {/* Navigation Bar */}
  <nav className={`flex justify-between p-4 ${theme === 'light' ? 'bg-teal-200' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-200'} ${textClass}`}>
    <button className="flex items-center cursor-pointer" onClick={() => navigate(-1)}>
      <FaArrowLeft className={`text-2xl mr-2 ${theme === 'light' ? 'text-black' : theme === 'dark' ? 'text-white' : 'text-gray-700'}`} />
    </button>
    <h1 className={`flex justify-between p-4 text-bold ${theme === 'light' ? 'text-teal-800' : theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Income Tax Information</h1>
    <button className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
      <FaHome className={`text-2xl mr-2 ${theme === 'light' ? 'text-black' : theme === 'dark' ? 'text-white' : 'text-gray-700'}`} />
    </button>
  </nav>

  {/* Page Content */}
  <main className={`flex-grow p-4 ${textClass}`}>
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold">{content.title}</h2>
    </div>
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {content.description.map((item, index) => (
        <li key={index}>
          {index !== 0 && <hr />}
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 md:text-${index % 2 === 0 ? 'end' : 'start'}`}>
            <time className="font-mono italic">{item.range}</time>
            <div className="text-lg font-black">{item.heading || item.tax}</div>
            <div>{item.details}</div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  </main>
</div>

  );
};

export default InfoPage;
