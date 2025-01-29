import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa"; // Experience
import { VscShield } from "react-icons/vsc"; // Web App Pen Tester (Security)
import { VscFolderLibrary } from "react-icons/vsc"; // Projects (Web 3 & Cybersecurity)


const About = () => {
  return (
    <section id="about">
      <h5>Let Me Share Something...</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
  <div className="about__cards">
    <article className="about__card">
      <FaAward className="about__icon" />
      <h5>Experience</h5>
      <small>7+ Years in Tech</small>
    </article>

    <article className="about__card">
      <VscShield className="about__icon" />
      <h5>Web App Pen Tester</h5>
      <small>TCM Certified - PWPP, PWPA, PJPT</small>
    </article>

    <article className="about__card">
      <VscFolderLibrary className="about__icon" />
      <h5>Projects</h5>
      <small>Web 3 & Cybersecurity</small>
    </article>
  </div>


  <p>
  I'm John, a <strong>full-stack web application developer</strong> specializing in <strong>Web 3 Ethereum-based applications</strong> and <strong>Web 2 development</strong>. With a degree in <strong>Information Systems Engineering</strong> from Stony Brook University, I have extensive experience in building and Pen Testing modern applications. My work bridges <strong>decentralized technologies with scalable web solutions</strong>, ensuring both innovation and security.
</p>

<p>
  Currently, I focus on <strong>web application security and penetration testing</strong>. As a <strong>TCM Security-certified Web App Pen Tester</strong>, I hold the <strong>PWPP, PWPA, PJPT,</strong> and <strong>CompTIA Security+ 701</strong> certifications. I specialize in <strong>black-box web application testing</strong>, identifying vulnerabilities, and strengthening security in real-world applications.
</p>

<p>
  This portfolio highlights my expertise in <strong>full-stack Web 3 and Web 2 development</strong>, along with my work in <strong>cybersecurity</strong>. It includes <strong>Ethereum-based projects</strong> developed through <strong>Moverz Media</strong> (generating <strong>$100K+ in revenue</strong>), as well as <strong>web application security projects, Java-based algorithms,</strong> and <strong>React front-end applications</strong>.
</p>


        </div>
      </div>
    </section>
  );
};

export default About;
