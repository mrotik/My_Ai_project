import React from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

interface HeaderProps {
  language: 'am' | 'en';
  onLanguageToggle: (lang: 'am' | 'en') => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  language, 
  onLanguageToggle, 
  currentPage, 
  onPageChange 
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-slate-900">AI4ALL</span>
          </div>

          {/* Desktop Navigation */}
          <Navigation 
            language={language} 
            currentPage={currentPage} 
            onPageChange={onPageChange} 
          />

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation 
          language={language} 
          currentPage={currentPage} 
          onPageChange={onPageChange} 
          isOpen={isMenuOpen} 
        />
      </div>
    </header>
  );
};