import React from "react";
import "./pySecScripts.css";

const data = [
  {
    id: 1,
    title: "SSH Brute Force Script",
    description:
      "Automates SSH login attempts using a list of common passwords to test for weak credential configurations. This tool demonstrates the importance of enforcing strong password policies and secure SSH access controls.",
    github:
      "https://github.com/jocruz/PySecScripts/tree/main/Brute%20Force%20SSH%20Script",
    emoji: "🔑",
  },
  {
    id: 2,
    title: "SHA-256 Hash Cracker Tool",
    description:
      "Performs brute-force attacks on SHA-256 hashed passwords using a wordlist to simulate password cracking techniques. Highlights the need for secure hashing practices to protect sensitive data.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/SHA256-Crack",
    emoji: "🔒",
  },
  {
    id: 3,
    title: "Username and Password Brute Forcer",
    description:
      "Tests common username-password combinations against web-based login forms to identify weak authentication setups. This tool underscores the importance of secure login practices and password complexity.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/Web-Brute",
    emoji: "🚪",
  },
  {
    id: 4,
    title: "SQL Injection Testing Tool",
    description:
      "Detects potential SQL injection vulnerabilities in web applications by testing for unsanitized inputs. This tool emphasizes the importance of secure coding practices to prevent database exploitation.",
    github: "https://github.com/jocruz/PySecScripts/tree/main/SQL-Injection",
    emoji: "💉",
  },
];

const PySecProjects = () => {
  return (
    <section id="py-sec-projects">
      <h5>My Python Security Projects</h5>
      <h2>PySecScripts Portfolio</h2>
      <p className="portfolio-intro">
  This portfolio showcases Python scripts I developed to practice security automation, including tasks like 
  brute-force testing, password cracking, and vulnerability scanning. Each project reflects my application of 
  programming fundamentals to real-world cybersecurity challenges.
</p>

      <div className="py-sec__container">
        {data.map(({ id, title, description, github, emoji }) => (
          <article key={id} className="py-sec__item">
            <div className="py-sec__item-header">
              <span className="py-sec__item-emoji">{emoji}</span>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <div className="py-sec__item-cta">
              {github && (
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
