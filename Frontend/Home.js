import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in and update state
    // You can add your own login logic here
    const userLoggedIn = checkIfUserIsLoggedIn();
    setIsLoggedIn(userLoggedIn);
  }, []);
  
  function checkIfUserIsLoggedIn() {
    // Add your own login check logic here
    return false;
  }
  
  return (
    <div className="home-screen">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li>{isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Log in / Sign up</Link>}</li>
        </ul>
      </nav>
      <div className="hero-section">
        <h1>Welcome to our Housing Service</h1>
        <button>Sign up</button>
      </div>
    </div>
  );
}

@sd@asdh@wd @@@@HomeScreen@@afterAlaaa@@

export default HomeScreen;
