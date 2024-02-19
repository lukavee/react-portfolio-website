import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom';




const Navbar = () => {


  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };



  return (
       
            <div className='navbar'>
              <div className='logo'>
                <img src="../public/images/portfolio-logo.png" alt="my logo" />
              </div>
              <div className="socials-links">
                <ul className='socials-wrapper'>
                  <li><Link target='_blank' rel='nnoopener noreferrer' to="https://github.com/lukavee"><BsGithub className='icon' /></Link></li>
                  <li><Link target='_blank' rel='noopener noreferrer' to="https://www.linkedin.com/in/luka-veljkovic-5258b622a/"><FaLinkedin className='icon' /></Link></li>
                  <li><Link target='_blank' rel='noopener noreferrer' to="mailto:lukaposlovni23@gmail.com"><MdEmail className='icon' /></Link></li>
                </ul>
              </div>
   
     <div className='navbar-links'>
                <nav className="hamburger-menu">
              <div className="menu-toggle" onClick={toggleMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
             
              <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
                <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                <div className={`exit-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                ×
              </div>
              </ul>
            </nav>

                <ul className='links-wrapper'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
      </div>
            </div>
        
       
   
    
  )
} 


export default Navbar
