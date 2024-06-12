import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
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
            🚀 About Me Hello! I'm John, a dynamic software developer and
            security enthusiast from Brooklyn, NYC. With a robust educational
            foundation from Stony Brook University in Information Systems
            Engineering, I've dived deep into the realms of Web 3 and
            cybersecurity. As a tech wizard, I'm currently channeling my skills
            into freelance projects with Moverz, sculpting the future of the
            internet one Web 3 DApp at a time. My journey has spanned roles from
            full-stack development to security, driven by a passion to bridge
            the evolving digital landscapes of Web 2 and Web 3.
          </p>
          <p>
            🌟 What I'm Up To I've recently aced my Sec+ 701, and I'm on a quest
            to blend the worlds of security and development. My current projects
            range from integrating Stripe for seamless NFT transactions to
            crafting comprehensive web applications like the Handball Hub.
            Whether it's mentoring budding developers or tackling the next
            security challenge, I'm all about pushing the envelope and preparing
            for the tech shifts on the horizon. Connect with me as I navigate
            the exciting intersection of creation and security, aiming to make a
            significant impact in the tech space.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
