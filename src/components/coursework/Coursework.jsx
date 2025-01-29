import React from 'react';
import './coursework.css';
import { FaFilePdf, FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Course logos
import pwh from '../../assets/pwh.PNG';
import pah from '../../assets/pah.PNG';
import pbb from '../../assets/pbb.png';
import peh from '../../assets/peh.png';
import py101 from '../../assets/py101.png';

// Certificates
import pwhCert from '../../assets/pwhcert.pdf';
import pahCert from '../../assets/pahcert.pdf';
import pbbCert from '../../assets/pbbcert.pdf';
import pehCert from '../../assets/pehcert.pdf';
import py101Cert from '../../assets/py101cert.pdf';

const courses = [
  {
    id: 1,
    title: 'Practical Web Hacking',
    issuer: 'TCM Security',
    date: 'Completed 01/14/2025',
    pdf: pwhCert,
    description: 
      'Advanced web application security training covering Web Sockets, NoSQL, Race Conditions, Open Redirect, authentication attacks, broken access control, SQL injection, ' +
      'SSRF, XSS, JWT attacks, and real-world web exploitation techniques.',
    logo: pwh,
    github: 'https://github.com/jocruz/Practical-Web-Hacking-Notes',
    website: 'https://academy.tcm-sec.com/p/practical-web-hacking',
  },
  {
    id: 2,
    title: 'Practical API Hacking',
    issuer: 'TCM Security',
    date: 'Completed 01/17/2025',
    pdf: pahCert,
    description: 
      'Focused on API security, covering enumeration, BOLA & BFLA attacks, JWT manipulation, SQL/NoSQL injection, ' +
      'SSRF, mass assignment, and chaining vulnerabilities for complete API exploitation.',
    logo: pah,
    github: 'https://github.com/jocruz/Practical-API-Hacking',
    website: 'https://academy.tcm-sec.com/p/hacking-apis',
  },
  {
    id: 3,
    title: 'Practical Bug Bounty',
    issuer: 'TCM Security',
    date: 'Completed 04/30/2024',
    pdf: pbbCert,
    description: 'Bug bounty methodologies with real-world vulnerabilities like XSS, SQL Injection, and IDOR.',
    logo: pbb,
    github: 'https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Bug-Bounty',
    website: 'https://academy.tcm-sec.com/p/practical-bug-bounty',
  },
  {
    id: 4,
    title: 'Practical Ethical Hacking',
    issuer: 'TCM Security',
    date: 'Completed 11/13/2024',
    pdf: pehCert,
    description: 'Comprehensive ethical hacking training covering reconnaissance, exploitation, and security assessments.',
    logo: peh,
    github: 'https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Ethical-Hacking',
    website: 'https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course',
  },
  {
    id: 5,
    title: 'Python 101 for Hackers',
    issuer: 'TCM Security',
    date: 'Completed 09/01/2024',
    pdf: py101Cert,
    description: 'Hands-on Python training for cybersecurity, including automation, scripting, and security tool development.',
    logo: py101,
    github: 'https://github.com/jocruz/PySecScripts',
    website: 'https://academy.tcm-sec.com/p/python-101-for-hackers',
  },
];

const Coursework = () => {
  return (
    <div className="coursework__container">
      <h3><FaBook /> Coursework</h3>
      <ul className="coursework__list">
        {courses.map(({ id, title, issuer, date, pdf, description, logo, github, website }) => (
          <li key={id} className="coursework__item">
            <div className="coursework__badge-container">
              <img src={logo} alt={`${title} logo`} className="coursework__badge" />
            </div>
            <h4>{title}</h4>
            <p>{issuer} - {date}</p>
            <p>{description}</p>
            <div className="coursework__links">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub Repo <FaGithub />
                </a>
              )}
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  Course Page <FaExternalLinkAlt />
                </a>
              )}
              {pdf && (
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn">
                  Download Certificate <FaFilePdf />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coursework;
