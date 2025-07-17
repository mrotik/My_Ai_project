import React from 'react';
import { Play, Youtube } from 'lucide-react';

interface MediaPageProps {
  language: 'am' | 'en';
}

export const MediaPage: React.FC<MediaPageProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Ուսումնական Նյութեր',
      videoTitle: 'Արհեստական vs Բանական - AI4ALL ծրագիրը',
      videoDescription: 'Դիտեք Լուսինե Ղուկասյանի հարցազրույցը AI-ի և կրթության մասին, որտեղ մանրամասն ներկայացվում է AI4ALL ծրագիրը և դրա նպատակները։',
      videoCaption: 'Այս վիդեոյում Լուսինե Ղուկասյանը խոսում է արհեստական բանականության դերի մասին կրթության ոլորտում և ներկայացնում AI4ALL նախաձեռնությունը։ Տեսանյութը պարունակում է օգտակար տեղեկություններ AI տեխնոլոգիաների մասին և դրանց կիրառման հնարավորությունների մասին։',
      watchOnYoutube: 'Դիտել YouTube-ում'
    },
    en: {
      title: 'Video & Media',
      videoTitle: 'Artificial vs Intelligence - AI4ALL Program',
      videoDescription: 'Watch Lusine Ghukasyan\'s interview about AI and education, where the AI4ALL program and its goals are presented in detail.',
      videoCaption: 'In this video, Lusine Ghukasyan talks about the role of artificial intelligence in education and presents the AI4ALL initiative. The video contains useful information about AI technologies and their application possibilities.',
      watchOnYoutube: 'Watch on YouTube'
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
            {text[language].videoDescription}
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Video Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  {text[language].videoTitle}
                </h2>
              </div>
              <p className="text-blue-100 leading-relaxed">
                #19 Արհեստական vs բանական | Լուսինե Ղուկասյան - ԱԲ-ն և կրթությունը․ AI4ALL ծրագիրը
              </p>
            </div>

            {/* Video Player */}
            <div className="relative bg-black">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/egHbkaSYx6w"
                  title="AI4ALL Program Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Caption */}
            <div className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {text[language].videoCaption}
              </p>
              
              <a
                href="https://www.youtube.com/watch?v=egHbkaSYx6w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>{text[language].watchOnYoutube}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Media Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {language === 'am' ? 'Այլ Մեդիա Նյութեր' : 'Other Media Content'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'am' 
                ? 'Շուտով այստեղ կհայտնվեն ավելի շատ վիդեոներ և մեդիա նյութեր'
                : 'More videos and media content will appear here soon'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 border border-slate-200 text-center"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'am' ? 'Շուտով' : 'Coming Soon'}
                </h3>
                <p className="text-slate-600">
                  {language === 'am' 
                    ? 'Նոր վիդեո բովանդակություն'
                    : 'New video content'
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};