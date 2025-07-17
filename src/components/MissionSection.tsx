import React from 'react';
import { Users, Brain, GraduationCap, Sparkles } from 'lucide-react';

interface MissionSectionProps {
  language: 'am' | 'en';
}

export const MissionSection: React.FC<MissionSectionProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Մեր Առաքելությունը',
      description: 'Մենք հավատում ենք, որ արհեստական բանականությունը պետք է լինի մատչելի բոլորի համար։ Մեր նպատակն է ապահովել որակյալ AI կրթություն հայ համայնքի բոլոր անդամների համար՝ անկախ նրանց տեխնիկական նախապատրաստությունից։',
      beginners: 'Սկսնակների Համար',
      beginnersDesc: 'Սկսեք ձեր AI ուղևորությունը հստակ և հասանելի դասերով',
      professionals: 'Մասնագետների Համար',
      professionalsDesc: 'Բարձրացրեք ձեր մասնագիտական հմտությունները առաջադեմ AI գործիքներով',
      students: 'Ուսանողների Համար',
      studentsDesc: 'Ուսումնական ռեսուրսներ և պրակտիկ առաջադրանքներ'
    },
    en: {
      title: 'Our Mission',
      description: 'We believe that artificial intelligence should be accessible to everyone. Our goal is to provide quality AI education for all members of the Armenian community, regardless of their technical background.',
      beginners: 'For Beginners',
      beginnersDesc: 'Start your AI journey with clear and accessible lessons',
      professionals: 'For Professionals',
      professionalsDesc: 'Enhance your professional skills with advanced AI tools',
      students: 'For Students',
      studentsDesc: 'Learning resources and practical assignments'
    }
  };

  const cards = [
    {
      icon: Users,
      title: text[language].beginners,
      description: text[language].beginnersDesc,
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Brain,
      title: text[language].professionals,
      description: text[language].professionalsDesc,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: GraduationCap,
      title: text[language].students,
      description: text[language].studentsDesc,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Mission & Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {text[language].title}
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            {text[language].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Armenian Pattern */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-lg rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};