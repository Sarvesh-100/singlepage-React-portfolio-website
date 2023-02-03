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
            <Box image={image1} alt='image1' text="This is My First Project" description='ksjhkashkdasa asdsasdasds' link='https://www.youtube.com' />
            <Box image={image2} alt='image2'  text='This is My Second Project' link='www.facebook.com' />
            <Box image={image2} alt='image2' text='This is My Third Project' link='www.facebook.com' />
            <Box image={image1} alt='image2'  text='This is My Fourth Project'  link='www.facebook.com'/>
        </div>
        <br/><br/><br/><br/>
    </div>
  )
}

export default Services