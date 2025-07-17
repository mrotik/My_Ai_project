import React from 'react';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

interface NewsPageProps {
  language: 'am' | 'en';
}

export const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
  const text = {
    am: {
      title: 'Նորություններ և Աղբյուրներ',
      welcome: 'Բարի գալուստ մեր ռեսուրսների բաժին։ Այստեղ դուք կգտնեք AI4ALL նախաձեռնության վերաբերյալ վերջին նորությունները, հոդվածները և օգտակար նյութերը։ Մենք կանոնավոր կերպով թարմացնում ենք այս բաժինը նոր բովանդակությամբ։',
      readMore: 'Կարդալ ավելին',
      articles: [
        {
          title: 'AI4ALL նախաձեռնությունը Հայաստանում',
          description: 'Ծանոթացեք AI4ALL ծրագրի նպատակների և առաջնահերթությունների հետ',
          link: 'https://blog.eif.am/hy/2025/06/02/ai4all',
          date: '2025-06-02'
        },
        {
          title: 'Արհեստական բանականության կրթությունը Հայաստանում',
          description: 'Նորություն AI4ALL ծրագրի մասին և դրա ազդեցության մասին',
          link: 'https://media.am/hy/newsroom/2025/06/23/43064/',
          date: '2025-06-23'
        },
        {
          title: 'AI4ALL՝ երեխաների կրթության համար',
          description: 'Ինչպես է AI4ALL ծրագիրը նպաստում երեխաների AI կրթությանը',
          link: 'https://arevik.armradio.am/hy/2025/06/26/ai4all-children-education/',
          date: '2025-06-26'
        }
      ]
    },
    en: {
      title: 'News & Resources',
      welcome: 'Welcome to our resources section. Here you will find the latest news, articles, and useful materials about the AI4ALL initiative. We regularly update this section with new content.',
      readMore: 'Read more',
      articles: [
        {
          title: 'AI4ALL Initiative in Armenia',
          description: 'Learn about the goals and priorities of the AI4ALL program',
          link: 'https://blog.eif.am/hy/2025/06/02/ai4all',
          date: '2025-06-02'
        },
        {
          title: 'Artificial Intelligence Education in Armenia',
          description: 'News about the AI4ALL program and its impact',
          link: 'https://media.am/hy/newsroom/2025/06/23/43064/',
          date: '2025-06-23'
        },
        {
          title: 'AI4ALL for Children\'s Education',
          description: 'How the AI4ALL program contributes to children\'s AI education',
          link: 'https://arevik.armradio.am/hy/2025/06/26/ai4all-children-education/',
          date: '2025-06-26'
        }
      ]
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
            {text[language].welcome}
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {text[language].articles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {article.description}
                  </p>
                  
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <span>{text[language].readMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative Element */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {language === 'am' ? 'Ավելի շատ ռեսուրսներ' : 'More Resources'}
            </h2>
            <p className="text-slate-600 mb-6">
              {language === 'am' 
                ? 'Հետևեք մեր սոցիալական ցանցերին՝ վերջին նորությունների և թարմացումների համար'
                : 'Follow our social networks for the latest news and updates'
              }
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/AI4ALLbyEIF"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ai4allbyeif/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};