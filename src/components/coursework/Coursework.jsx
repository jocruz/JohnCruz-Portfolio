import React from 'react';
import './coursework.css';
import { FaFilePdf, FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import peh from '../../assets/peh.png';
import pbb from '../../assets/pbb.png';
import py101 from '../../assets/py101.png';
import pehCert from '../../assets/pehcert.pdf';
import pbbCert from '../../assets/pbbcert.pdf';
import py101Cert from '../../assets/py101cert.pdf';

const courses = [
  {
    id: 1,
    title: 'Practical Ethical Hacking',
    issuer: 'TCM Security',
    date: 'Completed 11/13/2024',
    pdf: pehCert,
    description: 'Covered ethical hacking fundamentals, including reconnaissance, exploitation, and reporting.',
    logo: peh,
    github: 'https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Ethical-Hacking',
    website: 'https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course',
  },
  {
    id: 2,
    title: 'Practical Bug Bounty',
    issuer: 'TCM Security',
    date: 'Completed 04/30/2024',
    pdf: pbbCert,
    description: 'Learned bug bounty methodologies, exploring real-world vulnerabilities like XSS and SQL Injection.',
    logo: pbb,
    github: 'https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Bug-Bounty',
    website: 'https://academy.tcm-sec.com/p/practical-bug-bounty',
  },
  {
    id: 3,
    title: 'Python 101 for Hackers',
    issuer: 'TCM Security',
    date: 'Completed 09/01/2024',
    pdf: py101Cert,
    description: 'Built Python skills for cybersecurity, including scripting for automation and creating scanning tools.',
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
