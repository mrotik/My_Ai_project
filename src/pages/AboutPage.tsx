import React from 'react';
import { Users, Target, Heart, Building2 } from 'lucide-react';

interface AboutPageProps {
  language: 'am' | 'en';
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Մեր Մասին',
      intro: 'AI4ALL-ը նորարարական կրթական նախաձեռնություն է, որը նպատակ ունի արհեստական բանականության գիտելիքները մատչելի դարձնել հայ համայնքի բոլոր անդամների համար։',
      missionTitle: 'Մեր Առաքելությունը',
      mission: 'Մենք հավատում ենք, որ արհեստական բանականությունը պետք է լինի մատչելի բոլորի համար՝ անկախ նրանց տեխնիկական նախապատրաստությունից կամ սոցիալական դիրքից։ Մեր նպատակն է ապահովել որակյալ AI կրթություն հայ համայնքի բոլոր անդամների համար։',
      whatIsTitle: 'Ինչ է AI4ALL-ը',
      whatIs: 'AI4ALL-ը համապարփակ կրթական ծրագիր է, որը լուծում է AI գիտելիքների մատչելիության խնդիրը հայ համայնքում։ Մենք առաջարկում ենք անվճար դասընթացներ, գործիքներ և ռեսուրսներ՝ սկսնակներից մինչև առաջադեմ մակարդակ։',
      founding: 'AI4ALL նախաձեռնությունը իրականացվում է Հայաստանի Ներդրումային Հիմնադրամի (EIF) և Seaside Startup Summit-ի համագործակցությամբ։ Այս կազմակերպությունները միավորել են իրենց փորձառությունը և ռեսուրսները՝ ստեղծելու համար հզոր կրթական հարթակ։',
      ctaTitle: 'Միացեք Մեզ',
      cta: 'Եթե դուք ցանկանում եք սովորել AI-ի մասին կամ ցանկանում եք աջակցել մեր առաքելությանը, մենք հրավիրում ենք ձեզ միանալ մեր համայնքին։ Միասին մենք կարող ենք ապահովել, որ AI տեխնոլոգիաները դառնան բոլորի համար մատչելի։'
    },
    en: {
      title: 'About Us',
      intro: 'AI4ALL is an innovative educational initiative that aims to make artificial intelligence knowledge accessible to all members of the Armenian community.',
      missionTitle: 'Our Mission',
      mission: 'We believe that artificial intelligence should be accessible to everyone, regardless of their technical background or social position. Our goal is to provide quality AI education for all members of the Armenian community.',
      whatIsTitle: 'What is AI4ALL',
      whatIs: 'AI4ALL is a comprehensive educational program that solves the problem of AI knowledge accessibility in the Armenian community. We offer free courses, tools, and resources from beginner to advanced levels.',
      foundingTitle: 'Founding Organizations',
      founding: 'The AI4ALL initiative is implemented through the collaboration of the  Incubator Foundation (EIF) and Seaside Startup Summit. These organizations have combined their experience and resources to create a powerful educational platform.',
      ctaTitle: 'Join Us',
      cta: 'If you want to learn about AI or want to support our mission, we invite you to join our community. Together we can ensure that AI technologies become accessible to everyone.'
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            {text[language].title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {text[language].intro}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {text[language].missionTitle}
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {text[language].mission}
            </p>
          </div>

          {/* What is AI4ALL */}
          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {text[language].whatIsTitle}
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {text[language].whatIs}
            </p>
          </div>

          {/* Founding Organizations */}
          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {text[language].foundingTitle}
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {text[language].founding}
            </p>
            
            {/* Organization Logos */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <img 
                  src="eif.jpg" 
                  alt="Enterprise Incubator Foundation" 
                  className="h-12 object-contain mx-auto mb-4"
                />
                <h4 className="font-semibold text-slate-900 text-center mb-2">
                  {language === 'am' ? 'Հայաստանի Ներդրումային Հիմնադրամ' : 'Enterprise Incubator Foundation'}
                </h4>
                <p className="text-sm text-slate-600 text-center">
                  {language === 'am' ? 'Նորարարական ծրագրերի աջակցություն' : 'Supporting innovative programs'}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <img 
                  src="ai.jpg" 
                  alt="Seaside Startup Summit" 
                  className="h-12 object-contain mx-auto mb-4"
                />
                <h4 className="font-semibold text-slate-900 text-center mb-2">
                  Seaside Startup Summit
                </h4>
                <p className="text-sm text-slate-600 text-center">
                  {language === 'am' ? 'Ստարտափ համայնքի զարգացում' : 'Startup community development'}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {text[language].ctaTitle}
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              {text[language].cta}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};