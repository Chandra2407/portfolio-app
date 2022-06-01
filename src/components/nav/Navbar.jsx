import React, { useState } from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [active, setActive] = useState('#')
  const [showNavLinks, setShowNavLinks] = useState(false)

  return (
    <nav>
      <div className={showNavLinks ? 'nav-links mobile-links':'nav-links'}>
        <a href="#Home" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>Home</a>
        <a href="#About" onClick={() => setActive('#About')} className={active === '#About' ? 'active' : ''}>About me</a>
        <a href="#Experience" onClick={() => setActive('#Experience')} className={active === '#Experience' ? 'active' : ''}>Experience</a>
        <a href="#Projects" onClick={() => setActive('#Projects')} className={active === '#Projects' ? 'active' : ''}>Projects</a>
        <a href="#Contact" onClick={() => setActive('#Contact')} className={active === '#Contact' ? 'active' : ''}>Contact</a>
      </div>
      <div className='menu'>
          <GiHamburgerMenu className='ham' onClick={()=>setShowNavLinks(!showNavLinks)} />
      </div>
    </nav>
  )
}

export default Navbar