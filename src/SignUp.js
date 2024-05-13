import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 
import { useOutletContext } from 'react-router-dom';
import { createUserWithEmailAndPassword,getAuth,updateProfile } from 'firebase/auth';
import { auth } from './firebase';

function SignUpForm() {
    const navigate = useNavigate()
    const [ , , , ,setComponent] = useOutletContext()
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

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    await createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then(()=>{  
      navigate('/getway-travels');
    }).then(()=>{
      updateProfile(auth.currentUser, {
        displayName: formData.username
      }).catch((error) => {
        console.error(error)
        // An error occurred
        // ...
      });
    }) .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
  });

    
  };
  
useEffect(()=>{
  setComponent("signUp")
},[])


  return (
    <div className="container-fluid">
      <div className="background-signUp" ></div>
     <div className="form-card" >

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