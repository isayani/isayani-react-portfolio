import React from "react";
import "./about.css";
import meAbout from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="About Section Image of Insha Sayani" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <icon className="about__icon">
                <FaAward />
              </icon>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about__card">
              <icon className="about__icon">
                <FaUsers />
              </icon>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <icon className="about__icon">
                <FaTasks />
              </icon>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi voluptatem sint explicabo at similique iste autem placeat
            repudiandae totam cum nisi architecto officia quia facere minima,
            corrupti quasi distinctio?
          </p>

          <a href="#contact" className="btn btn-primary">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
