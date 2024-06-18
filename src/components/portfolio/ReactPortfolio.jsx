import React from "react";
import "./portfolio.css";
import contentfulImg from "../../assets/contentful.PNG";
import simplePortfolioImg from "../../assets/simpleportfolio.PNG";
import questionsImg from "../../assets/questions.PNG";
import reviewsImg from "../../assets/reviews.PNG";
import birthdayBuddyImg from "../../assets/birthdaybuddy.PNG";
import unsplashImg from "../../assets/unsplash.PNG";
import backroadsImg from "../../assets/backroads.PNG";
import handball from "../../assets/handball.PNG";
import portfolioImg from "../../assets/portfolioImg.PNG"

const data = [
  {
    id: 1,
    image: portfolioImg, // Assuming you have an image named 'portfolioImg' for your portfolio
    title: "John Cruz Portfolio",
    description:
      "A comprehensive showcase of my work involving Web 3 applications, Python, and cybersecurity projects",
    github: "https://github.com/jocruz/JohnCruz-Portfolio",
    demo: "https://www.johncruz.info/",
  },
  {
    id: 2,
    image: handball,
    title: "Handball Hub - Sports Web Application",
    description:
      "Handball Hub fills a crucial gap in the handball community by providing a digital platform to manage player rankings, tournament results, and general handball information. It features a player dashboard for signing up for tournaments, a director dashboard for event management, and a scorekeeping module for referees. The backend is powered by Prisma and PostgreSQL, ensuring robust data management.",
    github: "https://github.com/jocruz/NYCHandballNetwork",
  },
  {
    id: 3,
    image: contentfulImg,
    title: "Contentful CMS Project Overview",
    description:
      "This project demonstrates a dynamic web application powered by Contentful CMS, showcasing a portfolio of projects. Users can view various projects managed through Contentful, providing a streamlined way to update content without code changes.",
    github: "https://github.com/jocruz/Contentful-CMS",
    demo: "https://stellular-faloodeh-f18606.netlify.app/",
  },
  // Continue renumbering the rest of the entries similarly...
  {
    id: 4,
    image: simplePortfolioImg,
    title: "Simple React Portfolio",
    description: "A simple React portfolio showcasing my React skills.",
    github: "https://github.com/jocruz/simplePortfolio",
    demo: "https://thriving-salmiakki-956605.netlify.app/",
  },
  {
    id: 5,
    image: questionsImg,
    title: "Questions App",
    description:
      "The Questions App is an interactive accordion-style FAQ component built with React. It dynamically renders a list of questions and their corresponding answers, allowing users to expand or collapse each section individually. This app is designed to demonstrate effective state management and component structuring in React, featuring toggle functionality to display only one answer at a time. Explore the code on GitHub or see the live demo for a hands-on experience.",
    github: "https://github.com/jocruz/Questions",
    demo: "https://monumental-kleicha-160ec3.netlify.app/",
  },
  {
    id: 6,
    image: reviewsImg,
    title: "Reviews App",
    description:
      "The Reviews App is a React-based application that showcases a series of user reviews with an elegant, easy-to-navigate interface. Users can cycle through reviews using navigation buttons or opt for a random selection, all presented with smooth animations and an intuitive layout. This application demonstrates effective state management and component-based architecture in React, making it a great reference for those interested in dynamic content display.",
    github: "https://github.com/jocruz/Reviews",
    demo: "https://gilded-moonbeam-3d4e42.netlify.app/",
  },
  {
    id: 7,
    image: birthdayBuddyImg,
    title: "Birthday Buddy",
    description:
      "Birthday Buddy is a charming React application that showcases a list of birthdays. Users can view individual birthday entries with names, ages, and photos, and have the option to clear the list with a single action. The application highlights the use of React's state management and component-based architecture to handle dynamic data. Ideal for learning modern web development practices.",
    github: "https://github.com/jocruz/Birthday-Buddy",
    demo: "https://rad-gecko-e00942.netlify.app/",
  },
  {
    id: 8,
    image: unsplashImg,
    title: "Vite Unsplash",
    description:
      "The Vite Unsplash app is an advanced React-based application that provides users with a searchable gallery of high-resolution images from Unsplash. The app features a dark mode toggle and utilizes React Query for optimal data fetching and state management. It demonstrates modern web app development techniques with an emphasis on API integration and responsive design.",
    github: "https://github.com/jocruz/Unsplash-Images",
    demo: "https://soft-tulumba-806a9b.netlify.app/",
  },
  {
    id: 9,
    image: backroadsImg,
    title: "Temp Backroads App",
    description:
      "The Backroads Travel Tours Application is an elegant React web app designed to showcase travel packages and services offered by a travel agency. It features a responsive and user-friendly interface, with sections for tours, services, and company information.",
    github: "https://github.com/jocruz/temp-backroads-app",
    demo: "https://cozy-alpaca-d8c81b.netlify.app/",
  },
];

const ReactProjects = () => {
  return (
    <section id="react-projects">
      <h5>My React Projects</h5>
      <h2>React Projects Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>

              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Visit Site
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ReactProjects;
