import React from 'react'
import './header.css'
import CTA from './CTA'
import LogoSite from '../../assets/LogoSite.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='header'>
      <div className="container header__container">
        <h5 className='app__subtitle'>Hello, My Name is</h5>
        <h1 className='app__title'>Novak New Network</h1>
        <h5 className='personal-portfolio'>personal portfolio</h5>
        <h5 className="text-light">Fullstack Development</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={LogoSite} alt="Ukraine" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
