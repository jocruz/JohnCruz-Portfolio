import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG4,
    title: "Long Island Groupies Brewery - Full Stack Developer",
    github: "https://github.com/jocruz/DynamicWalletSubs",
    demo: "https://ligroupies.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "TikiToken ETH Decentralized Application - Web 3 Developer",
    demo: "https://tikitoken.io/",
  },
  {
    id: 3,
    image: IMG2,
    title:
      "Puff Puff Pass NFT ETH Decentralized Application - Web 3 Developer / Smart Contractor Auditor",
    demo: "https://www.missiondisrupt.com/insight/case-study/carniroll/",
  },
  {
    id: 4,
    image: IMG3,
    title:
      "Lost Cats 2D/3D SOL Decentralized Application - Web 3 Developer / Web 3 Researcher",
    github: "https://github.com/jocruz/LostCatsUi",
    demo: "https://lost-cats-ui.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Moverz Media Group Web 3 Innovators - Freelance Developer",
    demo: "https://moverzgroup.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Fighter Heart - Web 3 Developer / Smart Contractor Auditor",
    demo: "https://www.fighterheart.io/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work and My Roles in These Projects</h5>
      <h2>Portfolio</h2>
      <p className="portfolio-description">
        Below you'll find a selection of projects that I've had the privilege to
        work on.
      </p>
      <p className="portfolio-description">
        <i>
          Note: If GitHub links are unavailable, it's because the client
          requested privacy
        </i>
      </p>
      <p className="portfolio-description">
        <i>
          However, each listed site is a project I have actively contributed to
          and can discuss in terms of my role and the technologies used.
        </i>
      </p>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                )}
                <a href={demo} className="btn btn-primary" target="_blank">
                  Visit Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
