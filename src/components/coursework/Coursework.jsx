import React from 'react';
import './coursework.css';
import { FaFilePdf, FaBook } from 'react-icons/fa';
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
    pdf: pehCert, // Updated with the actual path to the certificate PDF
    description: 'Covered ethical hacking fundamentals, including reconnaissance, exploitation, and reporting.',
    logo: peh, // Reference to the Practical Ethical Hacking image
  },
  {
    id: 2,
    title: 'Practical Bug Bounty',
    issuer: 'TCM Security',
    date: 'Completed 04/30/2024',
    pdf: pbbCert, // Updated with the actual path to the certificate PDF
    description: 'Learned bug bounty methodologies, exploring real-world vulnerabilities like XSS and SQL Injection.',
    logo: pbb, // Reference to the Practical Bug Bounty image
  },
  {
    id: 3,
    title: 'Python 101 for Security',
    issuer: 'TCM Security',
    date: 'Completed 09/01/2024',
    pdf: py101Cert, // Updated with the actual path to the certificate PDF
    description: 'Built Python skills for cybersecurity, including scripting for automation and creating scanning tools.',
    logo: py101, // Reference to the Python 101 image
  },
];

const Coursework = () => {
  return (
    <div className="certifications__container">
      <h3><FaBook /> Coursework</h3>
      <ul className="certifications__list">
        {courses.map(({ id, title, issuer, date, pdf, description, logo }) => (
          <li key={id} className="certifications__item">
            <div className="certifications__badge-container">
              <img src={logo} alt={`${title} logo`} className="certifications__badge" />
            </div>
            <h4>{title}</h4>
            <p>{issuer} - {date}</p>
            <p>{description}</p>
            {pdf && (
              <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn">
                Download Certificate <FaFilePdf />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coursework;
