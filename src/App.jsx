import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About />
        <Experience />
        <Portofolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App