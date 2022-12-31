import React from "react"
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className = 'About Cards'>
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>

                        </article><article className = 'About Cards'>
                            <FiUsers className="about__icon"/>
                            <h5>Client</h5>
                            <small>20+ Client</small>

                        </article><article className = 'About Cards'>
                            <VscFolderActive className="about__icon"/>
                            <h5>Projects</h5>
                            <small>7+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                    Hello, my name is Zaky Wahyu Oktavianto, let's call it Zaky. I am an informatics engineer who loves front-end and design. I love being able to learn new things, especially in the world of design, coding and business. I am a friendly and adaptable person.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>

            </div>
        </section>
    )
}

export default About