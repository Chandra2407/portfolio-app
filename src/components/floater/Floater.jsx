import React from 'react'
import {FaGithub,FaLinkedin,FaYoutube} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import './floater.css'

const Floater = () => {
  return (
    <div id='floater'>
        <a href="https://github.com/Chandra2407" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/chandra-mahato-a37bb3176/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://leetcode.com/GrayDragneel/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
        <a href="https://www.youtube.com/channel/UC7YHuO-xS2iQRj48PRVYQMQ" target="_blank" rel="noreferrer"><FaYoutube/></a>
    </div>
  )
}

export default Floater