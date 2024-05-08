import React, { useState } from 'react';
import './FeedbackForm.css'; // Import your CSS file for styling

function FeedbackForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    feedback: '',
    questions: {
      satisfaction: '',
      experience: '',
      recommendation: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      questions: {
        ...prevState.questions,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add further processing as needed
  };

  return (
    <div className="form-container">
      <h2>Gateways Travel Feedback Form</h2>
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
          How satisfied were you with our services?
          <input type="text" name="satisfaction" value={formData.questions.satisfaction} onChange={handleQuestionChange} />
        </label>
        <label>
          How was your overall experience with Gateways Travel?
          <input type="text" name="experience" value={formData.questions.experience} onChange={handleQuestionChange} />
        </label>
        <label>
          Would you recommend Gateways Travel to others?
          <input type="text" name="recommendation" value={formData.questions.recommendation} onChange={handleQuestionChange} />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
