import React from "react";
import "./cybersecurity.css";
import { BiCheck } from "react-icons/bi";

const Cybersecurity = () => {
  return (
    <section id="cybersecurity">
      <h5>Showcasing My Cybersecurity Skills</h5>
      <h2>Comprehensive Training and Real-World Experience</h2>

      <div className="container cybersecurity__container">
        {/* Web Application Penetration Testing */}
        <article className="service">
          <div className="service__head">
            <h3>Web Application Penetration Testing 🌐</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mastered the OWASP Top 10 vulnerabilities, including SQL Injection, Cross-Site Scripting (XSS), and Server-Side Request Forgery (SSRF).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducted vulnerability assessments using industry-standard tools like Burp Suite, ffuf, and OWASP ZAP to uncover hidden weaknesses in web applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Learned advanced exploitation techniques such as Cross-Site Request Forgery (CSRF) bypasses, XML External Entities (XXE), and Insecure Deserialization.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Built and documented a comprehensive portfolio during the Practical Bug Bounty course:
                <a href="https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Bug-Bounty" target="_blank" rel="noopener noreferrer"> Bug Bounty Portfolio</a> 📂
              </p>
            </li>
          </ul>
        </article>

        {/* Network Penetration Testing */}
        <article className="service">
          <div className="service__head">
            <h3>Network Penetration Testing and Enumeration 🛡️</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Acquired hands-on knowledge of network penetration testing, including reconnaissance, enumeration, and exploitation strategies.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mastered tools like Metasploit, Nmap, and Nikto for network enumeration and service vulnerability analysis.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Successfully simulated attacks on Active Directory environments, applying techniques such as LLMNR poisoning, pass-the-hash, and Kerberoasting.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Documented detailed attack strategies and countermeasures:
                <a href="https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Ethical-Hacking" target="_blank" rel="noopener noreferrer"> Practical Ethical Hacking Portfolio</a> 🖥️
              </p>
            </li>
          </ul>
        </article>

        {/* Active Directory and Post-Exploitation */}
        <article className="service">
          <div className="service__head">
            <h3>Active Directory and Post-Exploitation 🔐</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Built and configured a Windows Server 2022 Active Directory lab to simulate real-world enterprise environments.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Gained proficiency in tools like Metasploit, CrackMapExec, Mimikatz, PsExec, and BloodHound for AD enumeration and exploitation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducted post-exploitation activities, including credential harvesting, lateral movement, and persistence strategies.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Documented everything in this section of the portfolio here:
                <a href="v" target="_blank" rel="noopener noreferrer"> Practical Cyber-Security Portfolio</a> 🖥️
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Cybersecurity;
