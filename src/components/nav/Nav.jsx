import React, { useState, useEffect } from 'react'
import './nav.css'
import { TiHomeOutline } from 'react-icons/ti'
import { FaUserAstronaut, FaFolder } from 'react-icons/fa'
// import { GiSpellBook } from 'react-icons/gi'
// import { RiCustomerService2Line } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.4 } // Adjust this value to control when the section becomes active
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <TiHomeOutline />
        <span>Home</span>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaUserAstronaut />
        <span>About</span>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaFolder />
        <span>Portfolio</span>
      </a>
    </nav>
  )
}

export default Nav
