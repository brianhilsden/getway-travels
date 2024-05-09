import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 

function SignUpForm() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // RedirectToLandingPage
    navigate('/');
  };
  


  return (
    <div className="container-fluid">
      <div className="background-signUp" ></div>
     <div className="form-card">

        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
  }

export default SignUpForm;