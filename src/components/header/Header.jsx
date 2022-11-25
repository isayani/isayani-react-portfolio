import React from 'react';
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
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

      <a href="#header" className='scroll__up'> Scroll Up </a>
      </div>
    </header>
  )
}

export default Header