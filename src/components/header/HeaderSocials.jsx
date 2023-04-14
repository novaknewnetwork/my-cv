import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aleksandr-novak-891474257" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/novak-new-network" target="_blank"><BsGithub/></a>
        <a href="https://www.upwork.com/freelancers/~018dc4755325ab5348?viewMode=1" target="_blank"><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials