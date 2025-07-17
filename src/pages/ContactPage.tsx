import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';

interface ContactPageProps {
  language: 'am' | 'en';
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const text = {
    am: {
      title: 'Կապ',
      welcome: 'Մենք ուրախ ենք լսել ձեզանից։ Եթե ունեք հարցեր AI4ALL ծրագրի մասին, ցանկանում եք միանալ մեր թիմին կամ պարզապես ցանկանում եք կիսվել ձեր մտքերով, խնդրում ենք կապվել մեզ հետ։',
      contactForm: 'Կապի Ձև',
      name: 'Անուն',
      email: 'Էլ․ հասցե',
      message: 'Նամակ',
      send: 'Ուղարկել',
      contactInfo: 'Կոնտակտային Տեղեկություններ',
      followText: 'Հետադարձ կապի համար գրել մեզ կամ հետևել սոցիալական հարթակներում',
      namePlaceholder: 'Ձեր անունը',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Ձեր նամակը...'
    },
    en: {
      title: 'Contact',
      welcome: 'We are happy to hear from you. If you have questions about the AI4ALL program, want to join our team, or simply want to share your thoughts, please contact us.',
      contactForm: 'Contact Form',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      contactInfo: 'Contact Information',
      followText: 'Contact us for feedback or follow us on social media',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {text[language].contactForm}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {text[language].name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={text[language].namePlaceholder}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {text[language].email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={text[language].emailPlaceholder}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {text[language].message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={text[language].messagePlaceholder}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{text[language].send}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {text[language].contactInfo}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600">info@ai4all.am</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        {language === 'am' ? 'Հեռախոս' : 'Phone'}
                      </p>
                      <p className="text-slate-600">+374 XX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        {language === 'am' ? 'Հասցե' : 'Address'}
                      </p>
                      <p className="text-slate-600">Yerevan, Armenia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'am' ? 'Սոցիալական Ցանցեր' : 'Social Media'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {text[language].followText}
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/AI4ALLbyEIF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/ai4allbyeif/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};