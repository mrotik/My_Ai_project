import React from 'react';

interface MobileNavigationProps {
  language: 'am' | 'en';
  currentPage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  language, 
  currentPage, 
  onPageChange, 
  isOpen 
}) => {
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

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-slate-200 py-4">
      <nav className="flex flex-col space-y-3">
        {pages.map((page) => (
          <button
            key={page.key}
            onClick={() => onPageChange(page.key)}
            className={`text-left py-2 transition-colors ${
              currentPage === page.key
                ? 'text-blue-600 font-medium'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </div>
  );
};