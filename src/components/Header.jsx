import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>It's a <span>React js</span> Website</h1>
            <p className='details'>React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the changes to those components over time.</p>
            <div className='header-btns'>
                <a href="#" className='cv-btn'>Hello</a>
                <a href="#" className='cv-btn1'>download app</a>
            </div>
        </div>
        <div className='arrow'></div>
    </div>
)
}

export default Header