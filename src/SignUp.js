import React, { useState } from 'react';
import './css/SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 

    // Log formData to the console for debugging
    console.log(formData);

    
      // Send a POST request to the backend endpoint
      axios.post('http://localhost:3001/account/add-user', {
        sname: formData.firstName,
        lname: formData.lastName,
        email: formData.email,
        phoneNum: formData.phone,
        pw: formData.password,
        membership: 'Basic', // replace with actual membership level
        professional: 'No', // replace with actual professional status
      })
        .then(response => {
          console.log('Success:', response.data);
          // Here you can handle the response. You might want to navigate to another page,
          // show a success message, etc.
    
          // Redirect to SignUp2.js after successful registration
          navigate('/SignUp2');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  

    return (
      <div className="signup-container">
        <h2>Register Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <table className="signup-table">
            <tbody>
              <tr>
                <td>
                  <label>First Name:</label>
                </td>
                <td>
                  <label>Last Name:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email Address:</label>
                </td>
                <td>
                  <label>Phone Number:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td>
                  <label>Re-enter Your Password:</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className={`clear-button`} type="clear">Clear All</button>
          <button className={`register-button`} type="submit">Register</button>
        </form>
      </div>
    );
  };


export default SignUp;
