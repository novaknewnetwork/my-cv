import React from 'react'
import './testimonials.css'
import { RxAvatar } from 'react-icons/rx'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'CTO, Infrastructure Services & Software Provider',
    review: 'They work with our "one band, one sound" philosophy of having a single, integrated team.'
  },

  {
    name: 'Director of Creative Strategy, Sports Content Company',
    review: 'What was most impressive was probably their speed and skills.'
  },

  {
    name: 'Department Head, Venture Capital Firm',
    review: 'Overall, Novak New Network is a one-of-a-kind agency, so anyone would be lucky to work with them.”'
  },

  {
    name: 'CEO & Founder, Sound Design & Music Software Company',
    review: 'Novak New Network had a well-realized way of work that we were able to onboard and blend with our existing tools.'
  },

  {
    name: 'Founder & Executive Director, DiverseCity',
    review: 'Novak New Network team is kind, respectful, and concerned about the project’s progress.'
  },

  {
    name: 'VP Marketing, Motion Recruitment',
    review: 'They can work with you to evolve your brand such that you don’t have to stick with one design option'
  },

  {
    name: 'Department Manager, Digital Market Research Company',
    review: 'Their responsiveness, problem-solving skills, and overall positivity have been of great help'
  },

  {
    name: 'Owner, Language Training Center',
    review: 'Novak New Network always accepts my feedback, and the results have been excellent. They keep working until I’m happy'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      modules={[Pagination]} 
      spaceBetween={40}
      slidesPerView={1} 
      speed={500}
      pagination={{ clickable: true }} className="container testimonials__container">
        {
          data.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <RxAvatar className='client__avatar' />
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials