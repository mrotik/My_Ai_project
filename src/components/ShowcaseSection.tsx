import React from 'react';
import { Edit3, Users, Palette, BarChart3, Code, Lightbulb } from 'lucide-react';

interface ShowcaseSectionProps {
  language: 'am' | 'en';
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Ինչպես Կարող Եք Օգտվել AI-ից',
      subtitle: 'Բացահայտեք անսահման հնարավորությունները',
      createContent: 'Ստեղծել բովանդակություն AI-ի միջոցով',
      createContentDesc: 'Գրեք մակալակարգություն, հոդվածներ և ստեղծագործական բովանդակություն',
      automate: 'Ավտոմատացնել դասավանդումը',
      automateDesc: 'Ստեղծեք ինտերակտիվ դասեր և գնահատման համակարգեր',
      design: 'Դիզայն պատրաստել հրահանգներով',
      designDesc: 'Ստեղծեք գեղատեսիլ դիզայն պարզ տեքստային հրահանգներով',
      analyze: 'Վերլուծել տվյալները հեշտությամբ',
      analyzeDesc: 'Օգտագործեք AI-ը տվյալների վերլուծության և կանխատեսման համար',
      program: 'Ծրագրավորել առանց փորձի',
      programDesc: 'Ստեղծեք կայքեր և հավելվածներ AI օգնականի հետ',
      innovate: 'Նորարարական լուծումներ',
      innovateDesc: 'Գտնեք ստեղծագործական լուծումներ ձեր մարտահրավերների համար'
    },
    en: {
      title: 'How You Can Use AI',
      subtitle: 'Discover unlimited possibilities',
      createContent: 'Create Content with AI',
      createContentDesc: 'Write articles, stories, and creative content effortlessly',
      automate: 'Automate Teaching',
      automateDesc: 'Create interactive lessons and assessment systems',
      design: 'Design with Prompts',
      designDesc: 'Create beautiful designs with simple text instructions',
      analyze: 'Analyze Data Easily',
      analyzeDesc: 'Use AI for data analysis and predictions',
      program: 'Program Without Experience',
      programDesc: 'Build websites and applications with AI assistance',
      innovate: 'Innovative Solutions',
      innovateDesc: 'Find creative solutions to your challenges'
    }
  };

  const showcaseItems = [
    {
      icon: Edit3,
      title: text[language].createContent,
      description: text[language].createContentDesc,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: text[language].automate,
      description: text[language].automateDesc,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Palette,
      title: text[language].design,
      description: text[language].designDesc,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: text[language].analyze,
      description: text[language].analyzeDesc,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Code,
      title: text[language].program,
      description: text[language].programDesc,
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Lightbulb,
      title: text[language].innovate,
      description: text[language].innovateDesc,
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {text[language].title}
          </h2>
          <p className="text-xl text-slate-600">
            {text[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`group relative ${item.bgColor} rounded-2xl p-8 border border-white/50 hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Armenian Pattern Decoration */}
              <div className="absolute top-4 right-4 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-md rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};