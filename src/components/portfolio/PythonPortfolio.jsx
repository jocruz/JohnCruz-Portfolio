import React from "react";
import "./pySecScripts.css";

const data = [
  {
    id: 1,
    title: "SSH Brute Force Script",
    description:
      "This script automates the process of attempting to log into an SSH server using a list of common passwords. It is intended to help identify weak passwords and demonstrate the importance of robust security policies in SSH environments.",
    github:
      "https://github.com/jocruz/PySecScripts/tree/main/Brute%20Force%20SSH%20Script",
    emoji: "🔑",
  },
  {
    id: 2,
    title: "SHA-256 Hash Cracker Tool",
    description:
      "This tool is designed to perform brute-force attacks against SHA-256 hashed passwords to identify the plaintext password from a hashed version using a common wordlist. It highlights the importance of robust encryption methods and the risks associated with weak cryptographic practices.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/SHA256-Crack",
    emoji: "🔒",
  },
  {
    id: 3,
    title: "Username and Password Brute Forcer Tool",
    description:
      "This Python script automates testing common usernames and passwords against web-based login forms to detect weak credentials. It demonstrates the ease with which common credentials can be exploited and underscores the need for stronger authentication mechanisms.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/Web-Brute",
    emoji: "🚪",
  },
  {
    id: 4,
    title: "SQL Injection Tool",
    description:
      "This tool facilitates testing SQL Injection vulnerabilities in web applications. It can help identify potential entry points for SQL Injection attacks, highlighting the need for secure coding practices.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/SQL-Injection",
    emoji: "💉",
  },
];

const PySecProjects = () => {
  return (
    <section id="py-sec-projects">
      <h5>My Python Security Projects/Scripts</h5>
      <h2>PySecScripts Portfolio</h2>

      <p class="portfolio-description">
        As part of my continuous self-development in cybersecurity, I have
        undertaken a comprehensive course with TCM Security to study Web
        Application Penetration Testing. 
      </p>
      <p class="portfolio-description">
        This motivated me to leverage my coding skills in Python to develop
        various scripts that not only demonstrate my coding ability but also
        enhance my understanding of security vulnerabilities.
      </p>
      <div className="container py-sec__container">
        {data.map(({ id, title, description, github, emoji }) => (
          <article key={id} className="py-sec__item">
            <div className="py-sec__item-header">
              <span className="py-sec__item-emoji">{emoji}</span>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <div className="py-sec__item-cta">
              {github && (
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PySecProjects;
