import React from 'react'
import './experience.css'
// import { motion} from "framer-motion"


const Skill = ({ skill, rating,AOS }) => {

    return (
        <div className="skill">
            <div className="data">
                <h5>{skill}</h5>
                <h5>{rating}</h5>
            </div>
            <div className="bar-container">
                <div data-aos ="fade-right" className="bar" 
                style={{width:rating}}   
                >
                </div>
            </div>
        </div>
    )
}

export default Skill