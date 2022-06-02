import React from 'react'
import './portfolio.css'
import Project from './Project'
import proj1 from  '../../assets/portfolio1.png'
import proj2 from  '../../assets/portfolio2.png'
import proj3 from  '../../assets/portfolio3.png'
import proj4 from  '../../assets/portfolio4.png'
import proj5 from  '../../assets/portfolio5.png'
import proj6 from  '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='Projects'>
       <h2>My Projects</h2>
       <div className="container projects-container">
            <Project title='Note Management App' 
            img={proj1}
            url='https://yournotes-app.netlify.app/'
            code='https://github.com/Chandra2407/Notes-App-JavaScript'
            />
            <Project title='Countdown Timer App' 
            img={proj2} 
            url="https://upbeat-swanson-52a5b4.netlify.app/" 
            code="https://github.com/Chandra2407/CountDown-Timer-Using-HTML-CSS-JAVASCRIPT"
            />
            <Project title='Virtual Cards App' img={proj3}
            url="https://spontaneous-khapse-98e749.netlify.app/#/all"
            code="https://github.com/Chandra2407/Virtual-Cards"
            />
            <Project title='Tic-Tac-Toe Game' img={proj4}
            url="https://ticc-tacc-toee-bruh.netlify.app/"
            code="https://github.com/Chandra2407/Tic-Tac-Toe"
            />
            <Project title='Accordion Tool' img={proj5}
            url="https://priceless-mcnulty-243678.netlify.app/"
            code="https://github.com/Chandra2407/faq-accordion-card-main"
            />
            <Project title='Portfolio App' img={proj6}
            url="https://chandrak-portfolio.netlify.app/"
            code="https://github.com/Chandra2407/portfolio-app"
            />
       </div>
    </section>
  )
}

export default Portfolio