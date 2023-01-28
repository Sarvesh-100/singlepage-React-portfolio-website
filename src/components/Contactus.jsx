import React, { useState } from 'react';


function ContactUs() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
}

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <> 
    <div id='ContactUs' className='s-heading'>
        <h1>Contact us</h1>
    </div>
    <form onSubmit={handleSubmit}>    
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      
      <button type="submit" className='cv-btn' >Send</button>
    </form>
    </>
  );
}

export default ContactUs;
