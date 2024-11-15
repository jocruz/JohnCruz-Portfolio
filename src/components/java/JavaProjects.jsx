import React from "react";
import "./javaProjects.css";

const data = [
  {
    id: 1,
    title: "Performance Scheduler System",
    description:
      "A linked-list-based Java application to manage performance schedules, enabling users to add, remove, and navigate through performances dynamically.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Performace%20Scheduler",
  },
  {
    id: 2,
    title: "Sigma Airline Simulator",
    description:
      "An airline management simulator using graph theory and adjacency matrices for route tracking, featuring the Floyd-Warshall algorithm for shortest path calculations.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Stigma%20Airline%20Application",
  },
  {
    id: 3,
    title: "Tree Kiosk Simulator",
    description:
      "A Java application utilizing tree structures to navigate and manage decision trees, simulating real-world kiosk functionalities.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Tree%20Kiosk%20Simulator",
  },
  {
    id: 4,
    title: "Stackotaire",
    description:
      "A solitaire game implementation using stack data structures to manage cards and game logic, showcasing stack-based operations.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Stackotaire",
  },
  {
    id: 5,
    title: "Stony Brook Bus Simulator",
    description:
      "A queue-based bus transport simulation, demonstrating the use of queues for scheduling and event management in Java.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Bus%20Simulator%20Application",
  },
  {
    id: 6,
    title: "Baseball Card Collection",
    description:
      "A command-line application to manage a collection of baseball cards using arrays and object-oriented programming principles.",
    github: "https://github.com/jocruz/Java-projects/tree/master/Base%20Ball%20Card%20Collection",
  },
];

const JavaProjects = () => {
  return (
    <section id="java-projects">
      <h5>My College Projects</h5>
      <h2>Java Projects Portfolio</h2>
      <p className="java-portfolio-description">
        This collection showcases Java programs I developed. These projects were designed to strengthen my understanding of object-oriented programming (OOP), data structures, and algorithms. Each project highlights specific problem-solving techniques and real-world applications, emphasizing the fundamentals of computer science.
      </p>
      <div className="java__container">
        {data.map(({ id, title, description, github }) => (
          <article key={id} className="java__item">
            <h3>{title}</h3>
            <p>{description}</p>
            {github && (
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default JavaProjects;
