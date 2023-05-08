import React, { useState } from 'react';
import Header from './Header';
import App from './App';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
//import { API } from 'aws-amplify';
//import * as mutations from './graphql/mutations';

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  /*const handleSubmit = async () => {
    try {
      // Assuming your AWS DynamoDB has a 'users' table with 'firstName' and 'lastName' fields.
      await API.graphql({
        //query: mutations.createUser,
        variables: {
          input: {
            firstName,
            lastName,
          },
        },
      });
      alert('Registration successful');
      navigate('/login'); // Redirect to the login page, or wherever you'd like to navigate.
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed');
    }
  };*/

  const handleClear = () => {
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {/*<button onClick={handleSubmit}>Register</button>*/}
      <button onClick={handleClear}>Clear</button>
      </div>
  );
}

export default SignUp;