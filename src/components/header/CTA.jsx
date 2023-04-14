import React from 'react'
import NovakOleksandrCV from '../../assets/NovakOleksandrCV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={NovakOleksandrCV} download className='btn'>Download CV</a>
        <a href="#portfolio" className='btn btn-primary'>Portfolio</a>
    </div>
  )
}

export default CTA