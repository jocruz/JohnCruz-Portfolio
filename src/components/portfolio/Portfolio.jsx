import React, { useState } from "react";
import "./portfolio.css";
import Certifications from "../certficiations/Certficiations";
import Coursework from "../coursework/Coursework";
import ProfessionalProjects from "./ProfessionalPortfolio";
import PySecProjects from "./PythonPortfolio";
import ReactProjects from "./ReactPortfolio";
import JavaProjects from "../java/JavaProjects";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="tabs">
        <button
          className={activeTab === "certifications" ? "active" : ""}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>
        <button
          className={activeTab === "coursework" ? "active" : ""}
          onClick={() => setActiveTab("coursework")}
        >
          Cyber Security Coursework
        </button>
        <button
          className={activeTab === "professionalprojects" ? "active" : ""}
          onClick={() => setActiveTab("professionalprojects")}
        >
          Paid Development Projects
        </button>
        <button
          className={activeTab === "pysec" ? "active" : ""}
          onClick={() => setActiveTab("pysec")}
        >
          Python Security Scripts
        </button>
        <button
          className={activeTab === "reactprojects" ? "active" : ""}
          onClick={() => setActiveTab("reactprojects")}
        >
          React Projects
        </button>
        <button
          className={activeTab === "javaprojects" ? "active" : ""}
          onClick={() => setActiveTab("javaprojects")}
        >
          Java Projects
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "coursework" && <Coursework />}
        {activeTab === "professionalprojects" && <ProfessionalProjects />}
        {activeTab === "pysec" && <PySecProjects />}
        {activeTab === "reactprojects" && <ReactProjects />}
        {activeTab === "javaprojects" && <JavaProjects />}
      </div>
    </section>
  );
};

export default Portfolio;
