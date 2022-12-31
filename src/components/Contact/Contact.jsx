import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {RiInstagramLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmv09jz', 'template_ovwr6vb', form.current, 'nKTrhwdM0EYXc4hsk')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zayuto33@gmail.com</h5>
            <a href="mailto:zayuto33@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <RiInstagramLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>jakywahyu</h5>
            <a href="https://www.instagram.com/jakywahyu/" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="http://wa.me/6282131764894" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/*Akhir Dari Opsi Kontak*/}

        <form ref={form} onsubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact