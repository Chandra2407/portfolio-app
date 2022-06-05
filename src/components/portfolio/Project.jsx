import React from 'react'
import './portfolio.css'

const Project = ({ img, title, url, code }) => {
    return (
        <article data-aos ="fade-in" 
        data-aos-duration="2500"
        className='project'>
            <div className="img-container">
                <img src={img} alt="proj1" />
            </div>
            <h3>{title}</h3>
            <div className="buttons-port">
                <a href={code} className='btn' target='_blank' rel="noreferrer">Source Code</a>
                <a href={url} className='btn btn-transparent' target='_blank' rel="noreferrer">Demo</a>
            </div>
        </article>
    )
}

export default Project