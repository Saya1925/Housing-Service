import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignUp.css';

const SignUp2 = () => {
  const navigate = useNavigate();

  const handleHomePageRegClick = () => {
    navigate('/HomePageRegistered');
  };

  return (
    <div className="success-container">
      <h1>Account Successfully Registered!</h1>
      <p>A confirmation email was sent to your email.</p><br/>
      <button className="homePageReg-button" onClick={handleHomePageRegClick}>
        OK 
      </button>
    </div>
  );
};

export default SignUp2;
