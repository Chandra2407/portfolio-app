import React from 'react'
import './experience.css'
import Skill from './Skill'

const Experience = () => {
  return (
      <section id='Experience'>
      <h2>My <span>Skills</span> </h2>
      <div className="container skill-container">
        <Skill skill='HTML5' rating='90%' />
        <Skill skill='CSS3' rating='85%' />
        <Skill skill='JavaScript' rating='85%' />
        <Skill skill='ReactJS' rating='80%' />
        <Skill skill='NodeJS' rating='70%' />
        <Skill skill='MongoDB' rating='60%' />
        <Skill skill='Bootstrap' rating='70%' />
        <Skill skill='Redux' rating='70%' />
        <Skill skill='Git & GitHub' rating='75%' />
        <Skill skill='Data Structures' rating='70%' />
      </div>
      </section>
  )
}

export default Experience