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
            I'm John, a full-stack developer specializing in Ethereum-based Web
            3 applications. With a degree in Information
            Systems Engineering from Stony Brook University.
          </p>

          <p>
            Currently, I focus on web application security. As a TCM
            Security-certified Web App Pen Tester (PWPP, PWPA, PJPT, and CompTIA
            Security+ 701), I excel in black-box testing to identify
            vulnerabilities and strengthen defenses.
          </p>

          <p>
            My portfolio showcases Ethereum-based
            projects at Moverz Media (generating over $100K in revenue), web
            security projects, Java, Python, and React applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
