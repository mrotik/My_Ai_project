import React from 'react';

interface NavigationProps {
  language: 'am' | 'en';
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ language, currentPage, onPageChange }) => {
  const text = {
    am: {
      home: 'Գլխավոր',
      about: 'Մեր Մասին',
      news: 'Նորություններ',
      media: 'Ուսումնական Նյութեր',
      contact: 'Կապ'
    },
    en: {
      home: 'Home',
      about: 'About',
      news: 'News',
      media: 'Educational Materials',
      contact: 'Contact'
    }
  };

  const pages = [
    { key: 'home', label: text[language].home },
    { key: 'about', label: text[language].about },
    { key: 'news', label: text[language].news },
    { key: 'media', label: text[language].media },
    { key: 'contact', label: text[language].contact }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {pages.map((page) => (
        <button
          key={page.key}
          onClick={() => onPageChange(page.key)}
          className={`transition-colors ${
            currentPage === page.key
              ? 'text-blue-600 font-medium'
              : 'text-slate-700 hover:text-blue-600'
          }`}
        >
          {page.label}
        </button>
      ))}
    </nav>
  );
};