import React from 'react'
import './footer.css'
import Ukraine from '../../assets/Ukraine.webp'
import {BsLinkedin} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <h5 className='personal-portfolio'>personal portfolio</h5>

      <div href="#" className='footer__logo'>
        <img src={Ukraine} alt="logo" />
      </div>

      <ul className='footer__list'>
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aleksandr-novak-891474257" target="_blank"><BsLinkedin/></a>
        <a href="https://www.upwork.com/freelancers/~018dc4755325ab5348?viewMode=1" target="_blank"><SiUpwork/></a>
        <a href="https://github.com/novak-new-network" target="_blank"><SiGithub/></a>
      </div>

      <div className="footer__rights">
        <small>&copy; NovakNewNetwork. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer