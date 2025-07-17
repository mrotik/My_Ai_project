import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { MediaPage } from './pages/MediaPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [language, setLanguage] = useState<'am' | 'en'>('am');
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} />;
      case 'about':
        return <AboutPage language={language} />;
      case 'news':
        return <NewsPage language={language} />;
      case 'media':
        return <MediaPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={language} 
        onLanguageToggle={setLanguage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {renderPage()}
      <Footer language={language} />
    </div>
  );
}

export default App;