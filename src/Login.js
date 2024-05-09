import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
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
    console.log(formData);
    // Redirect
    navigate('/');
  };

  return (

    <div className="login-form-container mt-3">

    <div className="login-form-container">
      
      <div className="background"></div>

      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form " style={{marginTop:"80px"}}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
