import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

interface CTASectionProps {
  language: 'am' | 'en';
}

export const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Պատրա՞ստ եք սկսել ձեր AI ուղևորությունը',
      subtitle: 'Գրանցվիր մեր արհեստական բանականության ուղեցույցին։',
      joinButton: 'Միացիր AI4ALL-ին',
      learnMore: 'Իմանալ ավելին',
      features: [
        'Անվճար հիմնական դասընթացներ',
        'Հայերեն լեզվով աջակցություն',
        'Պրակտիկ նախագծեր',
        'Համայնքային ցանց'
      ]
    },
    en: {
      title: 'Ready to Start Your AI Journey?',
      subtitle: 'Join our artificial intelligence guide and unlock your potential.',
      joinButton: 'Join AI4ALL',
      learnMore: 'Learn More',
      features: [
        'Free basic courses',
        'Armenian language support',
        'Practical projects',
        'Community network'
      ]
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {text[language].title}
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              {text[language].subtitle}
            </p>

            <div className="space-y-4">
              {text[language].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://www.facebook.com/AI4ALLbyEIF', '_blank')}
                className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>{text[language].joinButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://www.instagram.com/ai4allbyeif/', '_blank')}
                className="group bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                <span>{text[language].learnMore}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Friendly AI Robot */}
          <div className="relative">
            <div className="relative bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div className="text-center space-y-6">
                {/* AI Robot */}
                <div className="relative mx-auto w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Bot className="w-24 h-24 text-white" />
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-ping"></div>
                  
                  {/* Thumbs up gesture */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white text-2xl">👍</span>
                  </div>
                </div>

                {/* Speech bubble */}
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm relative">
                  <p className="text-white text-lg font-medium">
                    {language === 'am' ? 
                      'Ես այստեղ եմ ձեր AI ուղեցույց։ Եկեք միասին սովորենք!' :
                      'I\'m here as your AI guide. Let\'s learn together!'
                    }
                  </p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/20 rotate-45"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};