import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <h3 className="service__head">UI/UX Design</h3>
          <ul className="service__list">
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>designing custom pages and screens</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>harmonization of graphic elements with corporate identity</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>drawing buttons, sliders, switches</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>development of a working prototype of the product</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>creation of a logical chain of product use</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>testing and making changes based on its results</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>logo design</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <h3 className="service__head">Web Development</h3>
          <ul className="service__list">
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>bussines card site</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>landing page site</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>development of online stores</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>development of web portal sites</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>improvement of existing sites</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>technical support for existing sites</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>mobile application development</p>
            </li>
            <li className="service__item">
              <BiCheck className='service__item-icon'/>
              <p className='service__item-p'>database design for large projects and web servises.high-quality implementation and support of the project</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services