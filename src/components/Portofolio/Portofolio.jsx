import React from 'react'
import './portofolio.css'
import IMG2 from '../../assets/portofolio2.png'
import IMG1 from '../../assets/portofolio1.png'
import IMG3 from '../../assets/portofolio3.png'
import IMG4 from '../../assets/portofolio4.png'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="container item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>UI UX OnegaStore Mobile</h3>
          <div className="portfolio__item-cta">
            {/*<a href="https://github.com" className='btn' target='_blank'>Github</a>*/}
            <a href="https://www.figma.com/proto/eB8XrjsDHEJNZPxdFdVdJM/Laporan-Magang?node-id=1%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=49%3A262" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="container item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>UI UX CSI JATIM Mobile</h3>
          <div className="portfolio__item-cta">
            {/*<a href="https://github.com" className='btn' target='_blank'>Github</a>*/}
            <a href="https://www.figma.com/proto/NW9F66X2MbG1vmy5g9KgsV/Chevy-SPIN-JATIM?node-id=99%3A131&scaling=scale-down&page-id=0%3A1&starting-point-node-id=99%3A131&show-proto-sidebar=1" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="container item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>UI UX OnegaStore Website</h3>
          <div className="portfolio__item-cta">
            {/*<a href="https://github.com" className='btn' target='_blank'>Github</a>*/}
            <a href="https://www.figma.com/proto/1aE7eg2aZCZaxm2To3n56C/Web-Onega?node-id=79%3A21&scaling=scale-down&page-id=0%3A1&starting-point-node-id=79%3A21" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="container item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Front-End Profile Company</h3>
          <div className="portfolio__item-cta">
            {/*<a href="https://github.com" className='btn' target='_blank'>Github</a>*/}
            <a href="http://indolautanmakmur.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio