import React from 'react';
import './certifications.css';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import pjwtLogo from '../../assets/pjwtLogo.png'
import csLogo from '../../assets/csLogo.png';

const certifications = [
  {
    id: 1,
    title: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: 'Issued 04/05/2024',
    url: 'https://www.credly.com/badges/7d06c8d7-ce80-4094-b87d-4ddced0d0bce/public_url',
    description: 'Covered essential security concepts such as network security, cryptography, and risk management.',
    logo: csLogo, // Reference to the CompTIA badge
  },
  {
    id: 2,
    title: 'Practical Junior Web Tester (PJWT)',
    issuer: 'TCM Security',
    date: 'Issued 07/03/2024',
    url: 'https://certified.tcm-sec.com/4a803568-86d5-4150-924f-9cc6173eff74?key=a2d2b570e775b4a2f78622e7443351b05e021fcc03edfc9961ad3456ae9a1f8a&record_view=true#acc.YxCUh6Fi',
    description: 'Focused on hands-on penetration testing for web applications, including reconnaissance and exploitation.',
    logo: pjwtLogo, // Reference to the PJWT badge
  },
];


const Certifications = () => {
  return (
    <div className="certifications__container">
      <h3><FaCertificate /> Certifications</h3>
      <ul className="certifications__list">
        {certifications.map(({ id, title, issuer, date, url, description, logo }) => (
         <li key={id} className="certifications__item">
         <div className="certifications__badge-container">
           <img src={logo} alt={`${title} badge`} className="certifications__badge" />
         </div>
         <h4>{title}</h4>
         <p>{issuer} - {date}</p>
         <p>{description}</p>
         <div className="certifications__links">
           {url && (
             <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
               View Online <FaExternalLinkAlt />
             </a>
           )}
         </div>
       </li>       
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
