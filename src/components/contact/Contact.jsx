import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {MdOutlineWhatsapp} from 'react-icons/md'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eq7bj38', 'template_699jhtt', form.current, 'PhHHAqoQtT3OL5rcG')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>novaknewnetwork@gmail.com</h5>
              <a href="mailto:novaknewnetwork@gmail.com">Send message</a>
            </article>
            <article className="contact__option">
              <TbBrandTelegram className='contact__option-icon'/>
              <h4>Telegram</h4>
              <h5>@NovakNewNetwork</h5>
              <a href="https://t.me/NovakNewNetwork">Send message</a>
            </article>
            <article className="contact__option">
              <MdOutlineWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+380971671551</h5>
              <a href="https://wa.me/380971671551">Send message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail} className='form'>
            <input type="text" name="name" placeholder="Enter Your Name" requared />
            <input type="email" name="email" placeholder="Enter Your Email" requared />
            <textarea name="message" cols="30" rows="7" placeholder='Write us a message and we will contact You as soon as possible or leave Your feedback, because it is important for us and appreciate every opinion from you' requared></textarea>
            <button type='submit' className='btn btn-primary'>Send message</button>
          </form>
        </div>

    </section>
  )
}

export default Contact