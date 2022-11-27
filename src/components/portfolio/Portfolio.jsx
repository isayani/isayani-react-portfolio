import React from "react";
import "./portfolio.css";
import cover1 from "../../assets/portfolio1.jpg";
import cover2 from "../../assets/portfolio2.jpg";
import cover3 from "../../assets/portfolio3.jpg";
import cover4 from "../../assets/portfolio4.jpg";
import cover5 from "../../assets/portfolio5.png";
import cover6 from "../../assets/portfolio6.jpg";

// SAMPLE IMAGES NOT FOR PRODUCTION

const data = [
  {
    id: 1,
    image: cover1,
    title: "Project 1",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
  {
    id: 2,
    image: cover2,
    title: "Project 2",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
  {
    id: 3,
    image: cover3,
    title: "Project 3",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
  {
    id: 4,
    image: cover4,
    title: "Project 4",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
  {
    id: 5,
    image: cover5,
    title: "Project 5",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
  {
    id: 6,
    image: cover6,
    title: "Project 6",
    github: "https://github.com/isayani",
    demo: "https://github.com/isayani",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
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
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub Repo
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
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
}

export default Portfolio;
