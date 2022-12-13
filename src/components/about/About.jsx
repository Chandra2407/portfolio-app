import React from 'react'
import './about.css'


const About = () => {

  return (
        <section id='About'>
        <h2 data-aos ="fade-up">Hey, I am Chandra</h2>
        <h5 data-aos ="fade-up">I am a FrontEnd Web Developer, Currently working at Airtel. <br />And making cool stuffs makes me happy :)</h5>
        <div className="container about-container">
        <div data-aos ="fade-right" className="about-me">
           <h5><strong>Name:</strong> Chandra Kanta Mahato</h5>
           <h5><strong>Degree:</strong> Bachelor's of Technology</h5>
           <h5><strong>Email:</strong> chandra240797@gmail.com</h5>
           <h5><strong>Phone:</strong> +919330714418</h5>
        </div>
          <div className="cards">
              <div data-aos ="fade-right" className="card">
                  <h2>2+</h2>
                  <h5>Years of Experience</h5>
              </div>
              <div data-aos ="fade-left" className="card">
              <h2>10+</h2>
              <h5>Projects Completed</h5>
          </div>
          </div>
        </div>
        </section>
  )
}

export default About