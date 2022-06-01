import React from 'react'
import './experience.css'
import { motion} from "framer-motion"

const Skill = ({ skill, rating }) => {
    return (
        <div className="skill">
            <div className="data">
                <h5>{skill}</h5>
                <h5>{rating}</h5>
            </div>
            <div className="bar-container">
                <motion.div className="bar" 
                style={{width:rating}}   
                >
                </motion.div>
            </div>
        </div>
    )
}

export default Skill