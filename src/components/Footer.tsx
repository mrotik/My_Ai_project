import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'am' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const text = {
    am: {
      description: 'AI4ALL-ը նվիրված է արհեստական բանականության դարպասը բացելուն հայ համայնքի համար:',
      quickLinks: 'Արագ Հղումներ',
      home: 'Գլխավոր',
      tools: 'Գործիքներ',
      about: 'Մեր Մասին',
      contact: 'Կապ',
      courses: 'Դասընթացներ',
      resources: 'Ռեսուրսներ',
      blog: 'Բլոգ',
      tutorials: 'Ուսումնական Նյութեր',
      community: 'Համայնք',
      support: 'Աջակցություն',
      contactInfo: 'Կոնտակտային Տեղեկություններ',
      rights: 'Բոլոր իրավունքները պահպանված են',
      madeWith: 'Ստեղծված սիրով Հայաստանում'
    },
    en: {
      description: 'AI4ALL is dedicated to opening the gateway of artificial intelligence for the Armenian community.',
      quickLinks: 'Quick Links',
      home: 'Home',
      tools: 'Tools',
      about: 'About',
      contact: 'Contact',
      courses: 'Courses',
      resources: 'Resources',
      blog: 'Blog',
      tutorials: 'Tutorials',
      community: 'Community',
      support: 'Support',
      contactInfo: 'Contact Information',
      rights: 'All rights reserved',
      madeWith: 'Made with love in Armenia'
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-2xl font-bold">AI4ALL</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {text[language].description}
            </p>
           <div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/AI4ALLbyEIF" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </a>
  <a 
    href="https://www.instagram.com/ai4allbyeif/ " 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>
 
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{text[language].quickLinks}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white transition-colors text-left">{text[language].home}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].tools}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].about}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].contact}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].courses}</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{text[language].resources}</h3>
            <ul className="space-y-2">
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].blog}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].tutorials}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].community}</button></li>
              <li><button className="text-slate-300 hover:text-white transition-colors text-left">{text[language].support}</button></li>
            </ul>
          </div>

       
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{text[language].contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">info@ai4all.am</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">+374 XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">Yerevan, Armenia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-sm"></div>
              <span className="text-slate-300">© 2025 Mariam. 
                {text[language].rights}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-slate-300">{text[language].madeWith}</span>
              <span className="text-red-500">❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};