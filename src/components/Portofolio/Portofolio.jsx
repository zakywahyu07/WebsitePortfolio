import React from 'react'
import './portofolio.css'
import IMG3 from '../../assets/portfolio3.jpg'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="container item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://www.figma.com/proto/eB8XrjsDHEJNZPxdFdVdJM/Laporan-Magang?node-id=1%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=49%3A262" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio