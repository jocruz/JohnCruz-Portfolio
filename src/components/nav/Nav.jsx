import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {FaUserAstronaut} from 'react-icons/fa'
import {GiSpellBook} from 'react-icons/gi'
// import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import { FaFolder } from "react-icons/fa";
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}> <TiHomeOutline/> </a>
      <a href="#about" onClick={() => setActiveNav ('#about')} className = {activeNav === '#about' ? 'active' : ''}> <FaUserAstronaut/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <GiSpellBook/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiCustomerService2Line/> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <FaFolder /> </a>
    </nav>
  )
}

export default Nav