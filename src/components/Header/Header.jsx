import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Zaky Wahyu Oktavianto</h1>
        <h5 className="text-light">FrondEnd Developer, UI&UX Designer</h5>
        <CTA />

        <div className='me'>
          <img scr={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header