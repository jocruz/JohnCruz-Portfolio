import React, { useState } from 'react';
import About from '../about/About';
import Experience from '../experience/Experience';
import Services from '../services/Services';
import './profileTabs.css';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about'); // Default to 'About' tab

  return (
    <section id="profile">
      <h2>Get to Know Me</h2>
      
      <div className="profile-tabs">
  <button
    className={activeTab === 'about' ? 'active' : ''}
    onClick={() => setActiveTab('about')}
  >
    About Me
  </button>
  <button
    className={activeTab === 'experience' ? 'active' : ''}
    onClick={() => setActiveTab('experience')}
  >
    Skills
  </button>
  <button
    className={activeTab === 'services' ? 'active' : ''}
    onClick={() => setActiveTab('services')}
  >
    Development Journey & Expertise
  </button>
</div>

<div className="profile-tab-content">
  {activeTab === 'about' && <About />}
  {activeTab === 'experience' && <Experience />}
  {activeTab === 'services' && <Services />}
</div>

    </section>
  );
};

export default ProfileTabs;
