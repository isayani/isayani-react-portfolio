import React from "react";
import "./experience.css";
import { BsCheck2Circle, BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Acquired Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>CSS3</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Handlebars</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
{/* ---- END FRONT-END/START BACK-END CARD ---- */}

          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Express.js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Progressive Web Apps</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>QA Version Control (Git)</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Object-Oriented Programming</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsCheck2Circle />
              <h4>Model-View-Controller Paradigm</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
}

export default Experience;
