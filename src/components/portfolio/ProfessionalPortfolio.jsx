import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png"; // Update with your actual image paths
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.PNG";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import { FaCalendarAlt, FaTools } from "react-icons/fa";
import { BiStats } from "react-icons/bi";

const data = [
    {
      id: 1,
      image: IMG4,
      title: "Long Island Groupies Brewery - Full Stack Developer",
      github: "https://github.com/jocruz/DynamicWalletSubs",
      demo: "https://ligroupies.com/",
      date: "November 2023",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Magic Wallet"],
      metrics: "Served over 1,000 users and raised over $10,000",
    },
    {
      id: 2,
      image: IMG1,
      title: "TikiToken ETH Decentralized Application - Web 3 Developer",
      demo: "https://tikitoken.io/",
      date: "Launched June 1, 2022",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Dynamic Wallet"],
      metrics: "Generated over $100,000 in sales, served over 1,000 users",
    },
    {
      id: 3,
      image: IMG2,
      title: "Puff Puff Pass NFT - Web 3 Developer / Smart Contract Auditor",
      demo: "https://www.missiondisrupt.com/insight/case-study/carniroll/",
      date: "2022",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Dynamic Wallet"],
      metrics: "Supported over 2,000 festival attendees, 1,000+ users/buyers",
    },
    {
      id: 4,
      image: IMG3,
      title: "Lost Cats - Web 3 Developer / Web 3 Researcher",
      github: "https://github.com/jocruz/LostCatsUi",
      demo: "https://lost-cats-ui.vercel.app/",
      date: "March 2022",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Magic Wallet"],
      metrics: "Achieved over 5,000 NFT sales on Solana blockchain",
    },
    {
      id: 5,
      image: IMG5,
      title: "Moverz Media Group Web 3 Innovators - Freelance Developer",
      demo: "https://moverzgroup.com/",
      date: "Ongoing",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Magic Wallet"],
      metrics: "Ongoing innovative Web 3 development with Moverz Media",
    },
    {
      id: 6,
      image: IMG6,
      title: "Fighter Heart - Web 3 Developer / Smart Contract Auditor",
      demo: "https://www.fighterheart.io/",
      date: "2023",
      technologies: ["React JS", "TypeScript", "NextJS", "Vercel", "ThirdwebSDK", "Stripe API/Webhook", "Magic Wallet"],
      metrics: "Moved over 1,000 NFTs, generated over $10,000 in sales",
    },
  ];
  

  const ProfessionalProjects = () => {
    return (
      <section id="professional-projects">
        <h5>My Professional Work I Was Paid For</h5>
        <h2>Web 3 Projects</h2>
  
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo, date, technologies, metrics }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p><FaCalendarAlt /> <strong>Date:</strong> {date}</p>
              <p><BiStats /> <strong>Metrics:</strong> {metrics}</p>
              <p><FaTools /> <strong>Technologies Used:</strong> {technologies.join(', ')}</p>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProfessionalProjects;