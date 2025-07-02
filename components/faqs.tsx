"use client";
import React, { useState } from 'react';

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
      question: 'Why is domain name registration required?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    },
    {
      id: 5,
      question: 'Why is domain name registration required?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="rts-hosting-faq section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rts-section text-center">
              <h2 className="rts-section__title mb-0">Frequently asked questions</h2>
            </div>
            <div className="rts-faq__accordion">
              <div className="accordion" id="faqAccordion">
                {faqItems.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${activeId === item.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                      >
                        {item.question}
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${activeId === item.id ? 'show' : ''}`}>
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
