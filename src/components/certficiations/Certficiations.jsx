import React from 'react';
import './certifications.css';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

// Import Certification Logos
import pwpplogo from '../../assets/pwpplogo.png';
import pjwtLogo from '../../assets/pjwtLogo.png';
import csLogo from '../../assets/csLogo.png';
import pjptLogo from '../../assets/pjptLogo.png';

const certifications = [
  {
    id: 1,
    title: 'Practical Web Pentest Professional (PWPP)',
    issuer: 'TCM Security',
    date: 'Issued 01/27/2025',
    url: 'https://certified.tcm-sec.com/9c8d274d-9fa3-4265-85b0-ee0b4102a77b?key=9ab4c5b910f7ec7e2afc5ee185e877fbacf77f316bd17cd0f940590ebb73c306',
    description: 
      'An intermediate-level certification assessing the ability to conduct a full web application penetration test. ' +
      'Covered advanced exploitation techniques including NoSQL injection, race conditions, mass assignment, SSRF, ' +
      'template injection, and bypassing modern security controls. Delivered a professional penetration testing report ' +
      'with detailed findings and remediation strategies.',
    logo: pwpplogo,
  },
  {
    id: 2,
    title: 'Practical Web Pentest Associate (PWPA)',
    issuer: 'TCM Security',
    date: 'Issued 07/03/2024',
    url: 'https://certified.tcm-sec.com/4a803568-86d5-4150-924f-9cc6173eff74?key=a2d2b570e775b4a2f78622e7443351b05e021fcc03edfc9961ad3456ae9a1f8a&record_view=true#acc.YxCUh6Fi',
    description: 
      'Hands-on certification focused on testing web applications for vulnerabilities such as Broken Access Control, ' +
      'SQL Injection, Cross-Site Scripting (XSS), and Security Misconfiguration. Demonstrated the ability to exploit ' +
      'authentication, authorization, and injection flaws while delivering a detailed, CVSS-compliant penetration test report.',
    logo: pjwtLogo,
  },
  {
    id: 3,
    title: 'Practical Junior Penetration Tester (PJPT)',
    issuer: 'TCM Security',
    date: 'Issued 11/21/2024',
    url: 'https://certified.tcm-sec.com/006bf430-1660-4ee2-adda-d5cda8608055?key=723d1af6dc8c0bf85589342089df6c945f6f917d16ce5a7ad7cfb69a0b84fd3f',
    description: 
      'Validated penetration testing skills in internal network security assessments, including Active Directory exploitation, ' +
      'privilege escalation, lateral movement, and post-exploitation techniques. Required delivering a professional security ' +
      'report covering vulnerability findings, CVSS scoring, and remediation strategies.',
    logo: pjptLogo,
  },
  {
    id: 4,
    title: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: 'Issued 04/05/2024',
    url: 'https://www.credly.com/badges/7d06c8d7-ce80-4094-b87d-4ddced0d0bce/public_url',
    description: 
      'Industry-standard certification covering foundational cybersecurity concepts such as network security, risk management, ' +
      'cryptography, and security operations. Demonstrates knowledge of security best practices and defensive security principles.',
    logo: csLogo,
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
