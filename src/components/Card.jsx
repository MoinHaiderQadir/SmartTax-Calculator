// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imgSrc, theme, onClick }) => {
  // Define dynamic classes based on theme for adaptive styling
  const cardBgClass = theme === 'light' ? 'bg-white border-gray-200' : theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-300';
  const textClass = theme === 'light' ? 'text-gray-800' : theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const buttonHoverBgClass = theme === 'light' ? 'hover:bg-teal-500' : theme === 'dark' ? 'hover:bg-orange-400' : 'hover:bg-blue-500';
  const buttonTextClass = theme === 'light' ? 'text-teal-500' : theme === 'dark' ? 'text-green-500' : 'text-white';
  const buttonHoverTextClass = theme === 'light' ? 'hover:text-white' : theme === 'dark' ? 'hover:text-red-800' : 'hover:text-red-500';
  const buttonBorderClass = theme === 'light' ? 'border-teal-500' : theme === 'dark' ? 'border-orange-600' : 'border-blue-600';

  return (
    <div
      className={`card ${cardBgClass} shadow-lg border rounded-lg w-80 h-96 cursor-pointer transition-transform transform hover:scale-105 font-poppins`} // Adds Poppins font class
      onClick={onClick}
    >
      <figure className="h-1/2 overflow-hidden">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body flex flex-col justify-between items-center text-center h-1/2 p-4">
        <h2 className={`card-title ${textClass} font-semibold text-lg mb-2`}>{title}</h2>
        <p className={`${textClass} text-sm mb-4`}>{description}</p>
        <button
          className={`btn ${buttonHoverBgClass} ${buttonHoverTextClass} ${buttonBorderClass} ${buttonTextClass} border-2 rounded-full px-6 py-2 flex items-center gap-2 shadow-md transition-colors duration-300`}
          style={{
            color: 'inherit', // Inherits theme-based color initially
          }}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Card;
