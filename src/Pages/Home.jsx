// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardsGrid from './components/CardsGrid';

const App = () => {
  // State for theme
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      {/* Main container with dynamic background color based on theme */}
      <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-gray-700' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {/* Navbar with setTheme and theme props */}
        <Navbar setTheme={setTheme} theme={theme} />
        <main className="flex-grow">
          <Routes>
            {/* Pass the theme prop to CardsGrid */}
            <Route path="/" element={<CardsGrid theme={theme} />} />
          </Routes>
        </main>
        {/* Footer with theme prop */}
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
