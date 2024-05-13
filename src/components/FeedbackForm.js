import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './FeedbackForm.css';

// Defines the FeedbackForm component
function FeedbackForm() {
  const navigate = useNavigate() // Hook for navigation
  const [ ,  , ,, setComponent] = useOutletContext() // Destructures outlet context to get setComponent function

  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    feedback: '',
    satisfaction: '',
    experience: '',
    recommendation: ''
  });

  // Effect hook to update the current component
  useEffect(()=>{
    setComponent("feedbackForm")
  },[])

  // Handles input change and updates state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Feedback submitted successfully!'); // Alert successful submission

    // Redirect to homepage if form is submitted
    navigate('/getway-travels');
  };

  return (
    <>
    <div style={{height:"11vh"}}></div>

    <div className="form-container">
       <h2 > GetWays Travel Feedback Form</h2>
      <p>Please fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          Feedback:
          <textarea name="feedback" value={formData.feedback} onChange={handleInputChange} />
        </label>
        <h3>Additional Questions</h3>
        <label>
          How Did You Find Out About Us?
          <select name ="Find" value ={formData.Find} onChange={handleInputChange}>
            <option value="">Select a way</option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="other">Other</option>
          </select>
          </label>
        <label>
          How satisfied were you with our services?
          <select name="satisfaction" value={formData.satisfaction} onChange={handleInputChange}>
            <option value="">Select satisfaction level</option>
            <option value="very-satisfied">Very satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
            <option value="very-dissatisfied">Very dissatisfied</option>
          </select>
        </label>
        <label>
          How was your overall experience with Gateways Travel?
          <select name="experience" value={formData.experience} onChange={handleInputChange}>
            <option value="">Select experience</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
            <option value="very-poor">Very poor</option>
          </select>
        </label>
        <label>
          Would you recommend Gateways Travel to others?
          <select name="recommendation" value={formData.recommendation} onChange={handleInputChange}>
            <option value="">Select recommendation</option>
            <option value="definitely">Definitely</option>
            <option value="probably">Probably</option>
            <option value="maybe">Maybe</option>
            <option value="probably-not">Probably not</option>
            <option value="definitely-not">Definitely not</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
    </>
  );

}

export default FeedbackForm;