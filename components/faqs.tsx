"use client";
import React, { useState } from 'react';
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
import "@/app/styles/mobile.css"; 
import '@/app/styles/site-elements.css'
import "@/app/styles/reset.css";
import "@/app/styles/typography.css"

function Faqs() {
  const faqItems = [
    {
      id: 1,
      question: 'Why buy a domain name from EliteHost?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    },
    {
      id: 2,
      question: 'How does domain registration work?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    },
    {
      id: 3,
      question: 'Why is domain name registration required?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    },
    {
      id: 4,
      question: 'Can I transfer my domain to EliteHost?',
      answer: 'Absolutely! Transferring is easy and often comes with free renewal perks. We’ll guide you through every step.',
    },
    {
      id: 5,
      question: 'Do I get free privacy protection?',
      answer: 'Yes! We include free WHOIS privacy protection with most domains to keep your personal data safe.',
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to the most common questions about our domain services and hosting plans.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border border-gray-200 bg-white shadow-sm transition-all ${activeId === item.id ? "border-amber-500 shadow-md" : ""}`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                {item.question}
                <span className={`transform transition-transform ${activeId === item.id ? "rotate-180 text-amber-500" : "rotate-0 text-gray-400"}`}>
                  ▼
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${activeId === item.id ? "max-h-60 py-4" : "max-h-0 py-0"}`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
