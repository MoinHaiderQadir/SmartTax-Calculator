// src/components/CardsGrid.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const CardsGrid = ({ theme }) => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardsData = [
    {
      title: 'Income from Salary',
      description: 'Calculate tax based on your annual salary income.',
      imgSrc: '/Images/salary.jpeg',
      path: '/income-from-salary',
    },
    {
      title: 'Income from Business',
      description: 'Calculate tax based on your business income.',
      imgSrc: '/Images/Business.jpeg',
      path: '/income-from-business',
    },
    {
      title: 'Income from Property',
      description: 'Calculate tax based on your property income.',
      imgSrc: '/Images/house.jpeg',
      path: '/income-from-property',
    },
    {
      title: 'Income from Capital Gain',
      description: 'Calculate tax based on your capital gains.',
      imgSrc: '/Images/Capitalgains.jpeg',
      path: '/income-from-capital-gain',
    },
    {
      title: 'Income from Other Sources',
      description: 'Calculate tax based on your income from other sources.',
      imgSrc: '/Images/otherso.jpeg',
      path: '/income-from-other-sources',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          theme={theme}
          onClick={() => handleCardClick(card.path)}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
