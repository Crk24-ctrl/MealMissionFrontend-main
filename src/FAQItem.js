import React from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9662;</span> {/* Modern down arrow */}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
