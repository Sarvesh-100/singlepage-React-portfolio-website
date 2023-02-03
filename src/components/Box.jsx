import React from 'react'

const Box = (props) => {
  return (
    <a href={props.link}>
      <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.image} alt={props.alt} smooth="true"  />
        </div>
        <div className='s-b-text'>
            <p>{props.text}</p>
            <p style={{fontSize: '1.2em'}}>{props.description}</p>
            {/* <a href='www.facebook.com' className='cv-btn'>{props.button}</a> */}
        </div>
      </div>
    </a>
  )
}

export default Box