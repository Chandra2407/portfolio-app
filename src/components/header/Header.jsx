import React,{useState} from 'react'
import './header.css'
import cv from '../../assets/cv.pdf'
import img1 from '../../assets/img1.png'
import Roles from './Roles'

const roles = ['A Frontend Web Developer','A Web Developer','A Web Designer','A Javascript Developer']
const Header = () => {
  const [role,setRole] = useState(0);
  

  return (
    <header id='Home'>
        <div className="header-container">
            <h3>Hello!</h3>
            <h1>I'm Chandra</h1>
            <Roles roles = {roles} role={role} setRole={setRole}/>
            <div className="buttons">
              <a href={cv} download className='btn btn-transparent'>My Resume</a>
            </div>
        </div>
        <div className="me">
          <img src={img1} alt="me"
          />
        </div>
    </header>
  )
}

export default Header