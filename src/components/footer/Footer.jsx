import React from 'react';
import './footer.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h2 className="footer__title">John Cruz</h2>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jocruz94/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/jocruz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} John Cruz.</p>
      </div>
    </footer>
  );
};

export default Footer;
