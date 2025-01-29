import React, { useState, useEffect } from 'react';
import './nav.css';
import { TiHomeOutline } from 'react-icons/ti';
import { FaUserAstronaut, FaFolder } from 'react-icons/fa';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#profile');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null, // Observe within viewport
      threshold: 0.3, // Adjusted for better detection (previously 0.5)
    };

    const observer = new IntersectionObserver((entries) => {
      let foundActive = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
          foundActive = true;
        }
      });

      // If no section is found, reset to default (Get to Know Me!)
      if (!foundActive && window.scrollY < 50) {
        setActiveNav('#profile');
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navbar height
        behavior: 'smooth',
      });
      setActiveNav(id); // Update activeNav immediately on click
    }
  };

  return (
    <nav className={`nav ${isAtTop ? 'collapsed' : 'expanded'}`}>
      {isAtTop ? (
        <button
          className={`nav-btn ${activeNav === '#profile' ? 'active' : ''}`}
          onClick={() => scrollToSection('#profile')}
        >
          <FaUserAstronaut />
          <span>Get to Know Me!</span>
        </button>
      ) : (
        <>
          <button
            className={activeNav === '#' ? 'active' : ''}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveNav('#');
            }}
          >
            <TiHomeOutline />
            <span>Home</span>
          </button>
          <button
            className={activeNav === '#profile' ? 'active' : ''}
            onClick={() => scrollToSection('#profile')}
          >
            <FaUserAstronaut />
            <span>About</span>
          </button>
          <button
            className={activeNav === '#portfolio' ? 'active' : ''}
            onClick={() => scrollToSection('#portfolio')}
          >
            <FaFolder />
            <span>Portfolio</span>
          </button>
        </>
      )}
    </nav>
  );
};

export default Nav;
