import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logoHeader from './images/logoHeader.jpg';
import { Modal, Box, TextField, Button } from '@mui/material';
import './css/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //event listener1
  const handleOpen = () => setOpen(true);

  //event listener2
  const handleClose = () => setOpen(false);

  //event listener3
  const handleLogin = () => {
    console.log(email, password);
    // If the login is successful, update the isLoggedIn state
    setIsLoggedIn(true);
    handleClose();  // Close the login modal
  };

  const buttons = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/ServicePublished' },
    { label: 'ABOUT US', path: '' },
    { label: 'LOGIN', onClick: handleOpen },
  ];

  const location = useLocation();
  
  return (
    <header className="header" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <nav className="nav">
        <div className="logo-container">
          <img src={logoHeader} alt="logoHeader" />
          {isLoggedIn && (
            <button className="hamburger-menu">☰</button>
          )}
        </div>
        <div className="nav-links">
        {buttons.map((button, index) => {
          const isActive = button.path === location.pathname;

          return (
            <NavLink
              key={index}
              to={button.path}
              className={isActive ? 'nav-link active' : 'nav-link'}
              onClick={button.onClick}
            >
              {button.label}
            </NavLink>
          );
        })}
        </div>
      </nav>

      {/* Login Modal Code */}
      <Modal open={open} onClose={handleClose}>
        <Box className="login-box">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <Button
            className="login-button" 
            onClick={handleLogin} 
            variant="contained" 
            sx={{ mt: 2 }}>
            Log In
          </Button>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
