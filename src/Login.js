import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useOutletContext } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';
function LoginForm() {
  const navigate = useNavigate()  // Hook to navigate between routes
  const [ , , , , setComponent] = useOutletContext()  // Retrieve the setComponent function from context
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });  // State to hold form data

  const handleInputChange = (e) => {  // Handle changes to input fields
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {  // Handle form submission
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigate('/getway-travels');  // Navigate on successful login
      }).catch((error) => {
        const errorCode = error.code;
        alert(errorCode)  // Show error code in an alert
    });

  };
  function resetPassword() { // Function to reset password
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        alert("Password reset email sent!")  // Notify user on email sent
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)  // Display error message if reset fails
      });

  }

  useEffect(() => {  // Set the current component context to "login" on mount
    setComponent("login")
  }, [])

  return (
    <div className="login-form-container">
      <div className="background"></div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Login</button>
        <div style={{ textAlign: "center", marginTop: "5px" }} onClick={resetPassword}><small style={{ cursor: "pointer" }}>Forgotten password?</small></div>
      </form>
    </div>
  );
}

export default LoginForm;