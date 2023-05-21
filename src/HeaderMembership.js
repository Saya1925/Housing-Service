import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoHeader from './images/logoHeader.jpg';
import './css/Header.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SessionContext = React.createContext();

const HeaderUser = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);


  const handleLogin = () => {
    // Perform the login process here
    console.log(email, password);
    // If the login is successful, update the isLoggedIn state
    setIsLoggedIn(true);
    handleCloseLogin();
  };

  const buttons = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/ServicePublished' },
    { label: 'REQUEST SERVICE', path: '/CreateTask' },
    { label: 'PROFILE', onClick: handleOpenProfile },
  ];

  
  const profileButtons = [
    { label: 'Profile', path: '/Account' },
    { label: 'My Tasks', path: '' },
    { label: 'My Offers', path: '' },
    { label: 'Become Professional', path: '/Professional' },
    { label: 'Sign Out', path: '' },
  ]
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logoHeader} alt="logoHeader" />
        </div>
        <div className="nav-links">
          {buttons.map((button, index) => (
            <NavLink
              key={index}
              to={button.path}
              className="nav-link"
              onClick={button.onClick}
            >
              {button.label}
            </NavLink>
          ))}
          {isLoggedIn && (
            <>
              <span className="user-name">{userName}</span>
              <button className="hamburger-menu">☰</button>
            </>
          )}
        </div>
      </nav>

      {/* Login Modal Code */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box  className="login-box">
          <div className="login-title">Log In</div>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleLogin} variant="contained">
            <p className="login-title">Log In</p>
          </Button>
        </Box>
      </Modal>

      {/* Profile Modal Code */}
      <Modal open={openProfile} onClose={handleCloseProfile}>
        <Box className="profile-box">
          {profileButtons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              onClick={button.onClick}
              className="profile-link"
            >
                {button.label}
            </Link>
          ))}
        </Box>
      </Modal>
    </header>
  );
};

export default HeaderUser;
