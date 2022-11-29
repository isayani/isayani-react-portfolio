import React from 'react';
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import { TwitterLogoIcon } from '@radix-ui/react-icons'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">ISAYANI</a>

      <ul className="permaLinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/isayaniphotography"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/insha.gram"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/inshasayani"><TwitterLogoIcon/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ISayani Creative Services 2022</small>
      </div>
    </footer>
  )
}

export default Footer