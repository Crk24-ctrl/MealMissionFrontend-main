import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    // Variable to store the last scroll position
    let lastScrollTop = 0;

    // Event listener for scrolling
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Show footer if scrolling down, hide if scrolling up
      if (scrollTop > lastScrollTop) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }

      // Update lastScrollTop
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="contact-info">
        <span>Contact us:</span>
        <a href="https://www.instagram.com/mealmission_?igsh=d3UxMTdpY3l2eGh3" target="_blank" rel="noopener noreferrer">@MealMission</a>
        <span>|</span>
        <a href="mailto:mealmission@outlook.com">mealmission@outlook.com</a>
      </div>
    </footer>
  );
};

export default Footer;
