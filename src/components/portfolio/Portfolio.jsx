import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/Portfolio1.webp'
import Portfolio2 from '../../assets/Portfolio2.webp'
import Portfolio3 from '../../assets/Portfolio3.webp'
import Portfolio4 from '../../assets/Portfolio4.webp'
import Portfolio5 from '../../assets/Portfolio5.webp'
import Portfolio6 from '../../assets/Portfolio6.webp'

const data = [

  {
    id: 1,
    image: Portfolio1,
    title: 'Create Account Page with animations',
    github: 'https://novak-new-network.github.io/project-account/',
    demo: 'https://github.com/novak-new-network/project-account'
  },

  {
    id: 2,
    image: Portfolio2,
    title: 'Responsive layout with filter and animations',
    github: 'https://novak-new-network.github.io/project-animation-filter/',
    demo: 'https://github.com/novak-new-network/project-animation-filter'
  },

  {
    id: 3,
    image: Portfolio3,
    title: 'Responsive layout with Slick Slider',
    github: 'https://novak-new-network.github.io/project-american-cars/',
    demo: 'https://github.com/novak-new-network/project-american-cars'
  },

  {
    id: 4,
    image: Portfolio4,
    title: 'Responsive layout with HTML, CSS, JavaScript',
    github: 'https://novak-new-network.github.io/project-wines-clone/',
    demo: 'https://github.com/novak-new-network/project-wines-clone'
  },

  {
    id: 5,
    image: Portfolio5,
    title: 'Responsive layout with Slider Swiper',
    github: 'https://novak-new-network.github.io/project-flying-falcon/',
    demo: 'https://github.com/novak-new-network/project-flying-falcon'
  },

  {
    id: 6,
    image: Portfolio6,
    title: 'Responsive layout with HTML, CSS, JS',
    github: 'https://novak-new-network.github.io/project-regjeringen-clone/',
    demo: 'https://github.com/novak-new-network/project-regjeringen-clone'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>a few layout examples</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' className='btn'>GitHub</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Source</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio