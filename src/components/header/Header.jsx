import React from 'react'
import './header.css'
import cv from '../../assets/cv.pdf'
import img1 from '../../assets/img1.png'

const Header = () => {
  return (
    <header id='Home'>
        <div className="header-container">
            <h3>Hello!</h3>
            <h1>I'm Chandra</h1>
            <h3 className='text-light'><span>a</span> Javascript Developer</h3>
            <div className="buttons">
              <a href={cv} download className='btn btn-transparent'>My Resume</a>
            </div>
        </div>
        <div className="me">
          <img src={img1} alt="me" />
        </div>
    </header>
  )
}

export default Header