import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';
import { useOutletContext } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate(); // Provides navigation capabilities in your component
  const [ , , , ,setComponent] = useOutletContext() // Extract setComponent function from outlet context destructuring
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }); 

  useEffect(()=>{

    setComponent("contactUs") // Set active component in the outlet context
  },[]) 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    })); // Handle input changes for form fields
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert after form submission
    alert('Message sent successfully!');

    // Redirect to homepage after submission
    navigate('/getway-travels');

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div style={{height:"8vh"}}></div>

    <div className="contact-container">

      <div className="form-container">

        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p><strong>Address:</strong> Ngong Road 0100</p>
        <p><strong>Phone:</strong> +254 785985089</p>
        <p><strong>Email:</strong> GatewaysTravels@gmail.com</p>
      </div>
    </div>
    </>
  );
}

export default ContactForm;