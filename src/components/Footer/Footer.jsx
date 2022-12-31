import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ZAKYWAHYU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/jakywahyu"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Zaky Wahyu. All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer