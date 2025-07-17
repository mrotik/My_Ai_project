import React from 'react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  language: 'am' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const text = {
    am: {
      headline: 'Արհեստական Բանականությունը՝ Մատչելի Ամենայն Հայոց Համար',
      subheadline: 'Սովորեք, ուսումնասիրեք և օգտագործեք AI-ը՝ առանց նախորդ փորձի։',
      startLearning: 'Սկսել Ուսուցումը',
      viewTools: 'Դիտել Գործիքները',
      watchDemo: 'Դիտել Դեմոն'
    },
    en: {
      headline: 'Artificial Intelligence Accessible to All Armenians',
      subheadline: 'Learn, explore, and use AI—no experience needed.',
      startLearning: 'Start Learning',
      viewTools: 'View Tools',
      watchDemo: 'Watch Demo'
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI4ALL Initiative</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              {text[language].headline}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {text[language].subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>{text[language].startLearning}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border-2 border-slate-200 hover:border-slate-300">
                <Play className="w-5 h-5" />
                <span>{text[language].watchDemo}</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1,200+ {language === 'am' ? 'ուսանողներ' : 'students'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>50+ {language === 'am' ? 'դասընթացներ' : 'courses'}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
              {/* Mount Ararat Silhouette */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent rounded-3xl"></div>
              
              {/* AI Constellation Points */}
              <div className="relative space-y-6">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                    </div>
                  ))}
                </div>

                {/* Mountain Silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent rounded-b-3xl"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};