import React from 'react';
import './portfolio.css'
import cover1 from '../../assets/portfolio1.jpg'
import cover2 from '../../assets/portfolio2.jpg'
import cover3 from '../../assets/portfolio3.jpg'
import cover4 from '../../assets/portfolio4.jpg'
import cover5 from '../../assets/portfolio5.png'
import cover6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={cover1} alt="Project Title 1" />
        </div>
        <h3>Sample Project Title</h3>
        <a href="https://github.com/isayani" className='btn' target='_blank'>GitHub Repo</a>
        <a href="https://github.com/isayani" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
    </div>
    </section>
  )
}

export default Portfolio