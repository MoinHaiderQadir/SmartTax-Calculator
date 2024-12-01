// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardsGrid from './components/CardsGrid';
import IncomeFromSalary from './Pages/IncomeFromSalary';
import IncomeFromBusiness from './Pages/IncomeFromBusiness';
import IncomeFromProperty from './Pages/IncomeFromProperty';
import IncomeFromCapitalGain from './Pages/IncomeFromCapitalGain';
import IncomeFromOtherSources from './Pages/IncomeFromOtherSources';
import InfoPage from './Pages/InfoPage';

const App = () => {
  const [theme, setTheme] = useState('light');

  // Custom component to handle conditional rendering of Navbar and Footer
  const Layout = ({ children }) => {
    const location = useLocation();
    const showHeaderFooter = location.pathname !== '/';

    return (
      <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-teal-100' : theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'}`}>
        {showHeaderFooter && <Navbar setTheme={setTheme} theme={theme} />}
        <main className="flex-grow">{children}</main>
        {showHeaderFooter && <Footer theme={theme} />}
      </div>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect the root path (/) to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<CardsGrid theme={theme} />} />
          <Route path="/income-from-salary" element={<IncomeFromSalary theme={theme} setTheme={setTheme} />} />
          <Route path="/income-from-business" element={<IncomeFromBusiness theme={theme} setTheme={setTheme} />} />
          <Route path="/income-from-property" element={<IncomeFromProperty theme={theme} setTheme={setTheme} />} />
          <Route path="/income-from-capital-gain" element={<IncomeFromCapitalGain theme={theme} setTheme={setTheme} />} />
          <Route path="/income-from-other-sources" element={<IncomeFromOtherSources theme={theme} setTheme={setTheme} />} />
          <Route path="/info/:infoType" element={<InfoPage theme={theme} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
