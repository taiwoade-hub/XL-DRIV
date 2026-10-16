import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/mobilityData';
import { Link } from 'react-router-dom';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Booking & Fares', 'For Drivers', 'Safety', 'Services', 'Payments', 'Account'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-dark-950 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-dark-900 text-dark-900 dark:text-neutral-200 text-xs font-bold uppercase tracking-wider mb-4 border border-transparent dark:border-dark-800">
            <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
            Everything you need <br />
            <span className="text-brand-600 dark:text-brand-500">to know about XLDriv.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Got questions about proposing fares, driver subscriptions, or booking interstate trips? We’ve got answers.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search answers (e.g. fare negotiation, driver subscription, safety...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 text-sm font-semibold text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-dark-900 transition-all shadow-sm"
            />
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950'
                    : 'bg-neutral-100 dark:bg-dark-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-dark-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-dark-950/20 dark:border-brand-500/40 bg-neutral-50/60 dark:bg-dark-900 shadow-md' 
                      : 'border-neutral-200/80 dark:border-dark-800 bg-white dark:bg-dark-900/60 hover:border-neutral-300 dark:hover:border-dark-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-200/70 dark:bg-dark-800 text-dark-950 dark:text-brand-400">
                        {faq.category}
                      </span>
                      <span className="font-extrabold text-base sm:text-lg text-dark-950 dark:text-white font-display">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-500 text-dark-950' : 'bg-neutral-100 dark:bg-dark-800 text-neutral-500 dark:text-neutral-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100/80 dark:border-dark-800 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
              <p className="font-semibold">No questions matched your search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-2 text-xs font-bold text-brand-600 dark:text-brand-400 underline"
              >
                Reset search
              </button>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 rounded-2xl bg-dark-950 dark:bg-dark-800 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h4 className="font-bold text-base text-dark-950 dark:text-white font-display">
                Still have a specific question?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Our support team is active 24/7 to assist riders and drivers across Nigeria.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            Contact Customer Support
          </Link>
        </div>

      </div>
    </section>
  );
};
