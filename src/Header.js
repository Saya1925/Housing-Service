import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoHeader from './images/logoHeader.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './css/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logoHeader} alt="logoHeader" />
          {isLoggedIn && (
            <button className="hamburger-menu">☰</button>
          )}
        </div>
        <div className="nav-links">
          {buttons.map((button, index) => (
            <NavLink
              key={index}
              to={button.path}
              exact
              activeClassName="active"
              className="nav-link"
              onClick={button.onClick}
            >
              {button.label}
            </NavLink>
          ))}
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
