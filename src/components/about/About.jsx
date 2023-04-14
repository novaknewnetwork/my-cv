import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Year Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>  
        <div className="about__content">
          <p>It is impossible to imagine today without computer equipment and information technologies.   Their rapid development led to the actualization of many problems and complex tasks, among which are the task of creating modern application and system software oriented to the needs of specific users, Web design, creation of e-commerce systems, databases, problems of computer linguistics and computer graphics, information protection, etc.
          Our team was created precisely to solve the specified range of problems. If you are interested in a quick, and at the same time, high-quality and reliable implementation of the idea of your future project, then without hesitation press the button "Let's Talk".
          </p>  
        </div>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
      </div>
    </section>
  )
}

export default About