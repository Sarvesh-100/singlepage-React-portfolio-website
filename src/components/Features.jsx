import React from 'react'
import featureimage from '.././images/Frame 19.png'

const Features = () => {
return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image'/>
        </div>
        <div className='features-text '>
            <h2>Features</h2>
            <h3> Some Features Of <span>React js</span></h3>
            <p> React uses a virtual DOM to improve performance by reducing the number of updates to the actual DOM.</p>
            <p>React components can manage and share data between them using state and props.</p>
            <p>React can also be used to build mobile apps using React Native.</p>
            <p>React has an active and large community of developers, which means that there are a lot of resources, tutorials, and third-party libraries available.</p>
            <button>View More</button>
        </div>
                
    </div>
)
}

export default Features