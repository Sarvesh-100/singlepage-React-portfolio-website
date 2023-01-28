import React from 'react'
import { Link } from 'react-scroll'
import logo from '.././images/logo1.png'

const Navbar = () => {
  return (
    <div>
        <nav>
        <Link to='main' className='logo'>
            <img src={logo} alt='logo'  smooth={true} duration={2000}/>
        </Link>

        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='features' smooth={true} duration={1000} >features</Link></li>
            <li><Link to='Skills' smooth={true} duration={1000} >My Skills</Link></li>
            <li><Link to='myProjects' smooth={true} duration={1000} >My Projects</Link></li>
            <li><Link to='ContactUs' smooth={true} duration={1000} >Contact us</Link></li>
            <li><Link to='subscribe' smooth={true} duration={1000} >follow Me</Link></li>
            
            

        </ul>

        <Link to='#' className='hey'>TO APP</Link>


        </nav>
    </div>
)
}

export default Navbar