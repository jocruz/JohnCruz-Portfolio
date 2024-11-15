import React, { useState, useEffect } from 'react';
import './nav.css';
import { TiHomeOutline } from 'react-icons/ti';
import { FaUserAstronaut, FaFolder } from 'react-icons/fa';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    const handleScroll = () => {
      const footerPosition = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      setIsNearFooter(footerPosition < viewportHeight + 50); // Adjust as needed
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 } // Adjust threshold if needed
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ opacity: isNearFooter ? 0 : 1 }}>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <TiHomeOutline />
        <span>Home</span>
      </a>
      <a href="#profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}>
        <FaUserAstronaut />
        <span>About</span>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaFolder />
        <span>Portfolio</span>
      </a>
    </nav>
  );
};

export default Nav;
