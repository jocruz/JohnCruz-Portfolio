import React from 'react';
import { BsGithub, BsLinkedin, BsBook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      Socials
      <a href='https://www.linkedin.com/in/jocruz94/' target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href='https://github.com/jocruz' target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href='https://johncruz.info/appsec' target="_blank" rel="noopener noreferrer">
        <BsBook />
      </a>
    </div>
  );
};

export default HeaderSocials;
