import React from 'react';
import { Play, ArrowRight, Sparkles, Users, Brain, GraduationCap } from 'lucide-react';

interface HomePageProps {
  language: 'am' | 'en';
}

export const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const text = {
    am: {
      heroTitle: 'Արհեստական Բանականությունը՝ Մատչելի Ամենայն Հայոց Համար',
      heroSubtitle: 'Սովորեք, ուսումնասիրեք և օգտագործեք AI-ը՝ առանց նախորդ փորձի։',
      description: 'AI4ALL-ը կրթական նախաձեռնություն է, որը նպատակ ունի արհեստական բանականության գիտելիքները մատչելի դարձնել հայ ուսանողների և երիտասարդների համար։ Մենք առաջարկում ենք անվճար դասընթացներ, գործիքներ և ռեսուրսներ՝ AI տեխնոլոգիաների ուսուցման համար։',
      startLearning: 'Սկսել Ուսուցումը',
      learnMore: 'Իմանալ Ավելին',
      watchDemo: 'Դիտել Դեմոն',
      missionTitle: 'Մեր Առաքելությունը',
      missionDesc: 'Մենք հավատում ենք, որ արհեստական բանականությունը պետք է լինի մատչելի բոլորի համար։',
      beginners: 'Սկսնակների Համար',
      beginnersDesc: 'Սկսեք ձեր AI ուղևորությունը հստակ և հասանելի դասերով',
      professionals: 'Մասնագետների Համար',
      professionalsDesc: 'Բարձրացրեք ձեր մասնագիտական հմտությունները առաջադեմ AI գործիքներով',
      students: 'Ուսանողների Համար',
      studentsDesc: 'Ուսումնական ռեսուրսներ և պրակտիկ առաջադրանքներ'
    },
    en: {
      heroTitle: 'Artificial Intelligence Accessible to All Armenians',
      heroSubtitle: 'Learn, explore, and use AI—no experience needed.',
      description: 'AI4ALL is an educational initiative that aims to make artificial intelligence knowledge accessible to Armenian students and youth. We offer free courses, tools, and resources for learning AI technologies.',
      startLearning: 'Start Learning',
      learnMore: 'Learn More',
      watchDemo: 'Watch Demo',
      missionTitle: 'Our Mission',
      missionDesc: 'We believe that artificial intelligence should be accessible to everyone.',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>AI4ALL Initiative</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {text[language].heroTitle}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {text[language].heroSubtitle}
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                {text[language].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('https://www.facebook.com/AI4ALLbyEIF', '_blank')}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>{text[language].startLearning}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => window.open('https://www.youtube.com/watch?v=egHbkaSYx6w', '_blank')}
                  className="group bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border-2 border-slate-200 hover:border-slate-300"
                >
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

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent rounded-3xl"></div>
                
                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>

                 <div className="grid grid-cols-3 gap-4">
  {[
    { name: "ChatGPT", link: "https://chat.openai.com" },
    { name: "Claude", link: "https://claude.ai" },
    { name: "Perplexity", link: "https://www.perplexity.ai" },
    { name: "Gemini", link: "https://gemini.google.com" },
    { name: "DALL·E", link: "https://openai.com/dall-e" },
    { name: "Durable", link: "https://durable.co" },
  ].map((tool, i) => (
    <a
      key={tool.name}
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 bg-white/5 hover:bg-white/10 transition rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center text-white text-sm font-medium"
      style={{ animationDelay: `${i * 0.2}s` }}
    >
      {tool.name}
    </a>
  ))}
</div>


                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent rounded-b-3xl"></div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Mission & Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {text[language].missionTitle}
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              {text[language].missionDesc}
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

                <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-lg rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {language === 'am' ? 'Մեր Գործընկերները' : 'Our Partners'}
            </h2>
            <p className="text-slate-600">
              {language === 'am' 
                ? 'AI4ALL նախաձեռնությունը իրականացվում է հետևյալ կազմակերպությունների համագործակցությամբ'
                : 'The AI4ALL initiative is implemented in collaboration with the following organizations'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
              <img 
                src="eif.jpg" 
                alt="Enterprise Incubator Foundation" 
                className="h-16 object-contain mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {language === 'am' ? 'Հայաստանի Ներդրումային Հիմնադրամ' : 'Enterprise Incubator Foundation'}
              </h3>
              <p className="text-slate-600">
                {language === 'am' 
                  ? 'Նորարարական ծրագրերի և ստարտափների աջակցություն'
                  : 'Supporting innovative programs and startups'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
              <img 
                src="ai.jpg" 
                alt="Seaside Startup Summit" 
                className="h-16 object-contain mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Seaside Startup Summit
              </h3>
              <p className="text-slate-600">
                {language === 'am' 
                  ? 'Ստարտափ համայնքի զարգացում և ցանցային կապերի ստեղծում'
                  : 'Startup community development and networking'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};