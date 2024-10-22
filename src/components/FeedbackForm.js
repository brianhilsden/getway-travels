import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

// Defines the FeedbackForm component
function FeedbackForm() {
  const navigate = useNavigate(); // Hook for navigation
  const [, , , , setComponent] = useOutletContext(); // Destructures outlet context to get setComponent function

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
  useEffect(() => {
    setComponent("feedbackForm");
  }, []);

  // Handles input change and updates state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
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
      <div style={{ height: '11vh' }}></div>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">GetWays Travel Feedback Form</h2>
          <p className="text-gray-600 mb-4 text-center">Please fill out the form below:</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Questions</h3>

            <div className="form-group">
              <label htmlFor="Find" className="block text-sm font-medium text-gray-700">How Did You Find Out About Us?</label>
              <select
                id="Find"
                name="Find"
                value={formData.Find}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a way</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">LinkedIn</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="satisfaction" className="block text-sm font-medium text-gray-700">How satisfied were you with our services?</label>
              <select
                id="satisfaction"
                name="satisfaction"
                value={formData.satisfaction}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select satisfaction level</option>
                <option value="very-satisfied">Very satisfied</option>
                <option value="satisfied">Satisfied</option>
                <option value="neutral">Neutral</option>
                <option value="dissatisfied">Dissatisfied</option>
                <option value="very-dissatisfied">Very dissatisfied</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">How was your overall experience with Gateways Travel?</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select experience</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
                <option value="very-poor">Very poor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="recommendation" className="block text-sm font-medium text-gray-700">Would you recommend Gateways Travel to others?</label>
              <select
                id="recommendation"
                name="recommendation"
                value={formData.recommendation}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select recommendation</option>
                <option value="definitely">Definitely</option>
                <option value="probably">Probably</option>
                <option value="maybe">Maybe</option>
                <option value="probably-not">Probably not</option>
                <option value="definitely-not">Definitely not</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FeedbackForm;
