import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className="experience__container">
        <div className="experience__group">
          <h3>Full Stack Development</h3>
          <ul className="experience__list">
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>HTML/CSS</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Next JS</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Solidity</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Java</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>React</span>
            </li>
          </ul>
        </div>
        <div className="experience__group">
          <h3>Tech Engineer</h3>
          <ul className="experience__list">
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>OWASP Top 10</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Black Box Web App Testing</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Windows / Mac OS</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Web App Pen Testing</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Linux</span>
            </li>
            <li>
              <BsPatchCheckFill className="experience__icon" />
              <span>Customer Support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
