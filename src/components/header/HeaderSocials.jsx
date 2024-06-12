import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      Socials
        <a href='https://www.linkedin.com/in/jocruz94/' target ="_blank"><BsLinkedin /></a>
        <a href='https://github.com/jocruz' target ="_blank"><BsGithub /></a>
        
    </div>
  )
}

export default HeaderSocials