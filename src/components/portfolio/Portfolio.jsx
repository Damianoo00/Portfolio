import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-pic.png";
import IMG2 from "../../assets/portfolio-pic.png";
import IMG3 from "../../assets/portfolio-pic.png";
import IMG4 from "../../assets/portfolio-pic.png";
import IMG5 from "../../assets/portfolio-pic.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project title",
    github: "https://github.com/",
    demo: "https://dribble.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project title",
    github: "https://github.com/",
    demo: "https://dribble.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project title",
    github: "https://github.com/",
    demo: "https://dribble.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project title",
    github: "https://github.com/",
    demo: "https://dribble.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project title",
    github: "https://github.com/",
    demo: "https://dribble.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recen work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
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
