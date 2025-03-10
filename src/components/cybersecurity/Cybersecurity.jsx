import React from "react";
import "./cybersecurity.css";

const Cybersecurity = () => {
  return (
    <section id="cybersecurity">
      <h5>Cybersecurity Skills</h5>
      <h2>Training & Real-World Experience</h2>
      <div className="cybersecurity__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Application Pen Testing</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Mastered OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF).</p>
            </li>
            <li>
              <p>Conducted assessments with Burp Suite, ffuf, and OWASP ZAP.</p>
            </li>
            <li>
              <p>
                Explored advanced exploits (CSRF bypass, XXE, insecure
                deserialization).
              </p>
            </li>
            <li>
              <p>
                Documented findings in my{" "}
                <a
                  href="https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Bug-Bounty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bug Bounty Portfolio
                </a>
                .
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Network Pen Testing & Enumeration</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Hands-on reconnaissance, enumeration, and exploitation.</p>
            </li>
            <li>
              <p>Proficient with Metasploit, Nmap, and Nikto.</p>
            </li>
            <li>
              <p>Simulated attacks on Active Directory environments.</p>
            </li>
            <li>
              <p>
                Detailed strategies documented in my{" "}
                <a
                  href="https://github.com/jocruz/Practical-Cybersecurity-Portfolio/tree/main/Practical-Ethical-Hacking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethical Hacking Portfolio
                </a>
                .
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Active Directory & Post-Exploitation</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>
                Built a Windows Server 2022 AD lab for real-world simulations.
              </p>
            </li>
            <li>
              <p>
                Proficient with CrackMapExec, Mimikatz, PsExec, and BloodHound.
              </p>
            </li>
            <li>
              <p>
                Conducted post-exploitation (credential harvesting, lateral
                movement).
              </p>
            </li>
            <li>
              <p>
                View details in my{" "}
                <a href="v" target="_blank" rel="noopener noreferrer">
                  Cybersecurity Portfolio
                </a>
                .
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Cybersecurity;
