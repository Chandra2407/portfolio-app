import React from 'react'
import './experience.css'
import Skill from './Skill'


const Experience = () => {
  return (
      <section id='Experience'>
      <h2>My <span>Skills</span> </h2>
      <div className="container skill-container">
        <Skill AOS skill='HTML5' rating='90%' />
        <Skill AOS skill='CSS3' rating='85%' />
        <Skill AOS skill='JavaScript' rating='85%' />
        <Skill AOS skill='ReactJS' rating='80%' />
        <Skill AOS skill='NodeJS' rating='70%' />
        <Skill AOS skill='MongoDB' rating='60%' />
        <Skill AOS skill='Bootstrap' rating='70%' />
        <Skill AOS skill='Redux' rating='70%' />
        <Skill AOS skill='Git & GitHub' rating='75%' />
        <Skill AOS skill='Data Structures' rating='70%' />
      </div>
      </section>
  )
}

export default Experience