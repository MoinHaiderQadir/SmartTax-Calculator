import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = ({ theme }) => {
  // Define classes based on theme for both desktop and mobile views
  const footerBgClass = theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-teal-400' : 'bg-blue-900';
  const footerTextClass = theme === 'dark' ? 'text-gray-300' : theme === 'light' ? 'text-green-900' : 'text-gray-200';
  const footerAccentTextClass = theme === 'dark' ? 'text-orange-400' : theme === 'light' ? 'text-green-700' : 'text-teal-300';
  const footerTitleClass = theme === 'dark' ? 'text-white' : theme === 'light' ? 'text-green-900' : 'text-teal-100';
  const borderClass = theme === 'dark' ? 'border-gray-600' : theme === 'light' ? 'border-gray-500' : 'border-teal-400';

  // Define mobile-specific classes
  const mobileFooterBgClass = theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-teal-400' : 'bg-blue-900';
  const mobileFooterTextClass = theme === 'dark' ? 'text-gray-300' : theme === 'light' ? 'text-green-900' : 'text-gray-200';
  const mobileFooterAccentTextClass = theme === 'dark' ? 'text-orange-400' : theme === 'light' ? 'text-green-700' : 'text-teal-100';

  return (
    <>
      {/* Desktop and Tablet View */}
      <footer className={`hidden sm:flex ${footerBgClass} ${footerTextClass} p-10 justify-around`}>
        <div className="container flex justify-between w-full space-x-12">
          {/* Logo and Description Section */}
          <div className="flex-1">
            <h2 className={`text-2xl font-bold ${footerTitleClass}`}>TaxCalculator</h2>
            <p className="mt-2 text-sm">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with a wonderful serenity has taken possession of my entire.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1">
            <h6 className={`text-lg font-semibold ${footerTitleClass} mb-2 border-b-2 ${borderClass} pb-1`}>Quick Link</h6>
            <nav className="space-y-2">
              <a className="link link-hover flex items-center hover-gradient-text">Home</a>
              <a className="link link-hover flex items-center hover-gradient-text">Leadership</a>
              <a className="link link-hover flex items-center hover-gradient-text">Terms</a>
              <a className="link link-hover flex items-center hover-gradient-text">Privacy Policy</a>
              <a className="link link-hover flex items-center hover-gradient-text">Licenses</a>
            </nav>
          </div>

          {/* Services Section */}
          <div className="flex-1">
            <h6 className={`text-lg font-semibold ${footerTitleClass} mb-2 border-b-2 ${borderClass} pb-1`}>Our Services</h6>
            <nav className="space-y-2">
              <a className="link link-hover flex items-center hover-gradient-text">Evaluation</a>
              <a className="link link-hover flex items-center hover-gradient-text">Migrate</a>
              <a className="link link-hover flex items-center hover-gradient-text">Study</a>
              <a className="link link-hover flex items-center hover-gradient-text">Counseling</a>
              <a className="link link-hover flex items-center hover-gradient-text">Online Payment</a>
            </nav>
          </div>

          {/* Contact Details Section */}
          <div className="flex-1">
            <h6 className={`text-lg font-semibold ${footerTitleClass} mb-2 border-b-2 ${borderClass} pb-1`}>Contact Details?</h6>
            <div className="flex items-center mt-2">
              <FaPhoneAlt className={`mr-2 ${footerAccentTextClass}`} />
              <a href="tel:+923083522326" className={`link link-hover ${footerAccentTextClass} font-medium`}>+92-3325408289</a>
            </div>
            <div className="flex items-center mt-2">
              <FaEnvelope className={`mr-2 ${footerAccentTextClass}`} />
              <a href="mailto:info@nettax.org" className={`link link-hover ${footerAccentTextClass} font-medium`}>moinhaiderqadir@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile View */}
      <footer className={`sm:hidden footer footer-center ${mobileFooterBgClass} ${mobileFooterTextClass} rounded p-10`}>
        {/* Navigation Links */}
        {/* Copyright Information */}
        <aside className="mt-4">
          <p>Copyright © {new Date().getFullYear()} <br/>All rights reserved by moinhaiderqadir</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
