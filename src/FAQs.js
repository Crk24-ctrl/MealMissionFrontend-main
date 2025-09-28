import React, { useState } from 'react';
import FAQItem from './FAQItem';
import './FAQs.css';
import Header from './Header';
import Footer from './Footer';
import faqIllustration from './Questions-pana.png'; 
import privacyPolicy from './PrivacyPolicy.pdf';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What is this website about?", answer: "This website is about helping people donate and receive food to reduce food waste." },
    { question: "How do I donate food?", answer: "To donate food, you need to sign up as a donor, fill out the donation form, and submit it. Your donation will be visible to recipients." },
    { question: "Who can receive food donations?", answer: "Anyone in need of food can sign up as a recipient and request food donations through our platform." },
    { question: "Is there a cost to use this service?", answer: "No, this service is completely free for both donors and recipients." },
    { question: "How can I check the status of my donations or requests?", answer: "You can check the status of your donations or requests by navigating to the 'View Status' page in your account. This page will show you all pending and accepted requests. You also have the option of accepting and rejecting requests for your donation after chatting with the receiver." },
    { question: "Can I donate cooked food?", answer: "Yes, you can donate both cooked and uncooked food. Please ensure that the food is safe for consumption." },
    { question: "How can I review the Privacy Policy for Meal Mission?", answer: `You can review our detailed Privacy Policy by downloading it here: <a href="${privacyPolicy}" target="_blank" rel="noopener noreferrer">Download Privacy Policy</a>.` }
  ];

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <Header />
      <div className="main-container">
        <div className="faq-container">
          <div className="faq-content">
            <h2 className="faq-title">
              <span className="title-black">Frequently </span>
              <span className="highlight">Asked Questions</span>
            </h2>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={<span dangerouslySetInnerHTML={{ __html: item.answer }} />}
                isOpen={openIndex === index}
                onClick={() => handleFAQClick(index)}
              />
            ))}
          </div>
          <img src={faqIllustration} alt="FAQs Illustration" className="faq-illustration" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
