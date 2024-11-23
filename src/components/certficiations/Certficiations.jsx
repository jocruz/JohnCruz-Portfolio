import React from 'react';
import './certifications.css';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import pjwtLogo from '../../assets/pjwtLogo.png';
import csLogo from '../../assets/csLogo.png';
import pjptLogo from '../../assets/pjptLogo.png'; // Import PJPT logo

const certifications = [
  {
    id: 1,
    title: 'Practical Junior Penetration Tester (PJPT)',
    issuer: 'TCM Security',
    date: 'Issued 11/21/2024',
    url: 'https://certified.tcm-sec.com/006bf430-1660-4ee2-adda-d5cda8608055?key=723d1af6dc8c0bf85589342089df6c945f6f917d16ce5a7ad7cfb69a0b84fd3f',
    description: 'Assessed the ability to perform an internal network penetration test at an associate level, with a focus on ethical hacking, Active Directory exploitation, enumeration, and information gathering. Successfully led an internal penetration test, leveraging skills in lateral and vertical network movement to identify critical vulnerabilities. Delivered a detailed professional report outlining findings, CVSS scoring, and remediation steps, showcasing expertise in internal network security assessment and exploitation.',
    logo: pjptLogo,
  },
  {
    id: 2,
    title: 'Practical Web Pentest Associate (PWPA)',
    issuer: 'TCM Security',
    date: 'Issued 07/03/2024',
    url: 'https://certified.tcm-sec.com/4a803568-86d5-4150-924f-9cc6173eff74?key=a2d2b570e775b4a2f78622e7443351b05e021fcc03edfc9961ad3456ae9a1f8a&record_view=true#acc.YxCUh6Fi',
    description: 'Focused on hands-on penetration testing for web applications, emphasizing the OWASP Top 10 vulnerabilities, including Broken Access Control, SQL Injections, Cross-Site Scripting (XSS), and Security Misconfiguration. Successfully conducted a web application penetration test, identified critical vulnerabilities, and wrote a detailed CVSS-compliant report with remediation steps. Demonstrated expertise in exploiting Authentication, Authorization, and Injection vulnerabilities.',
    logo: pjwtLogo,
  },
  {
    id: 3,
    title: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: 'Issued 04/05/2024',
    url: 'https://www.credly.com/badges/7d06c8d7-ce80-4094-b87d-4ddced0d0bce/public_url',
    description: 'Covered essential security concepts such as network security, cryptography, and risk management.',
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
