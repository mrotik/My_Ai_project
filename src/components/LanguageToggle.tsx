import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'am' | 'en';
  onToggle: (lang: 'am' | 'en') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-slate-600" />
      <div className="relative inline-flex bg-slate-100 rounded-full p-1">
        <button
          onClick={() => onToggle('am')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'am' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          ՀԱՅ
        </button>
        <button
          onClick={() => onToggle('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'en' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};