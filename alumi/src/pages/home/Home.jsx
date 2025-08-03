import React from 'react'
import Hero from './hero'
import About from './About'
import Portfolio from './Portfolio'
import WhyChooseUs from './WhyChooseUs'
import Projects from './Projects'
import Testimonials from './testimonials'
import Contact from './contact'
import Footer from './footer'


function home() {
  return (
    <div>
      <Hero />  
      <About />
      <Portfolio />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default home
