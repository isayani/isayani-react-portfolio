import React from 'react';
import './header.css'
import CTA from './CTA'
import Me from '../../assets/IMG_8775.png'
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Insha Sayani</h1>
      <h5 className='text-light'>Full-Stack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={Me} alt='image of Insha Sayani'/>
      </div>

      <a href="#footer" className='scroll__up'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header