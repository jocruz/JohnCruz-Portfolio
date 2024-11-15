import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Let Me Share Something... </h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience </h5>
              <small>7+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5> Clients </h5>
              <small>WorldWide!</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Projects </h5>
              <small>Web 3 based and Mentoring</small>
            </article>
          </div>

          <p>
            🚀 About Me Hello! I'm John, a dynamic freelance software developer
            and security enthusiast from Brooklyn, NYC. Graduated from Stony
            Brook University in Information Systems Engineering, I've dived deep
            into the realms of Web 3 and cybersecurity. As a tech wizard, I'm
            currently channeling my skills into freelance projects with Moverz a
            start up based in Long Island, sculpting the future of the internet
            one Web 3 DApp at a time. My journey has spanned roles from
            full-stack development to Technical Analysis to Tech Support and
            more! I am driven by a passion to bridge the evolving digital
            landscapes of Web 2 and Web 3.
          </p>
          <p>
            🌟 Here’s a more concise and professional revision of your updated
            text: I have successfully earned my Sec+ 701 and TCM Security PJWT
            (Practical Junior Web Tester) certifications and am currently
            pursuing the TCM Security PJPT (Practical Junior Penetration
            Tester), which emphasizes Active Directory network penetration
            testing. My long-term goal is to achieve the TCM Security PWPT
            (Practical Web Penetration Tester) certification to deepen my
            expertise in web application penetration testing, aligning with my
            niche in cybersecurity.
          </p>

          <p>
            🏄In this portfolio, I showcase my TCM Security certifications and
            coursework, which form the foundation of my cybersecurity training.
            I also highlight my paid Web 3 projects, completed through Moverz
            Media, which collectively generated over $100,000 in revenue for
            clients. Additionally, I include my Java projects, developed during
            my academic journey to enhance my understanding of data structures
            and algorithms, as well as my React projects, which demonstrate my
            front-end development expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
