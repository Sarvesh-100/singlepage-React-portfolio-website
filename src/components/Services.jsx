import React from 'react'
import Box from './Box'
import image1 from '.././images/s1.png'
import image2 from '.././images/s2.png'

const Services = () => {
  return (
    <div id='myProjects'>
        <div className='s-heading'>
        <h1>My Projects</h1>
        <p> my recent Projects</p>
        <br/><br/><br/><br/>
        </div>
        <div className='b-container'>
            <Box image={image1} alt='image1' button='PYTHON' text="This is My First Project"/>
            <Box image={image2} alt='image2' button='PROJECT2' text='This is My Second Project'/>
            <Box image={image2} alt='image2' button='PROJECT2' text='This is My Second Project'/>
            <Box image={image1} alt='image2' button='PYTHON' text='This is My Second Project'/>
        </div>
        <br/><br/><br/><br/>
    </div>
  )
}

export default Services