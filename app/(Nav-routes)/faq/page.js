'use client';

import React, { useState } from 'react';

// --- FAQ DATA ---
const faqData = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Our standard check-in time is 3:00 PM, and check-out is at 11:00 AM. If you require an early check-in or late check-out, please contact us in advance, and we will do our best to accommodate your request, subject to availability.',
  },
  {
    question: 'Do you offer airport shuttle services?',
    answer: 'Yes, we provide airport transportation for our guests. This can be arranged at the time of booking or by contacting our concierge desk. Please note that this service may incur an additional fee.',
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'We offer complimentary on-site valet parking for all our guests. Our secure car park is monitored 24/7 for your peace of mind.',
  },
  {
    question: 'Are pets allowed at Casa Lumière?',
    answer: 'We understand that pets are part of the family. Well-behaved small pets are welcome in designated pet-friendly rooms for a supplementary fee. Please inform us at the time of booking if you plan to bring a pet.',
  },
  {
    question: 'Is Wi-Fi available at the hotel?',
    answer: 'Yes, complimentary high-speed Wi-Fi is available for all guests throughout the entire hotel, including guest rooms, lobby, and public areas.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies depending on the rate and dates of your reservation. Generally, we offer free cancellation up to 48 hours before the check-in date. Please refer to your booking confirmation for specific details.',
  },
];

// --- Single FAQ Item Component ---
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 dark:text-gray-100 focus:outline-none hover:cursor-pointer"
      >
        <span>{question}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};


// --- Main FAQ Page Component ---
const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-[#131322] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
