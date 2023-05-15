import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg';
import './css/Header.css';
import Modal from '@mui/material/Modal';
import './css/Modal.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => {
    // Perform the login process here
    console.log(email, password);
    // If the login is successful, update the isLoggedIn state
    setIsLoggedIn(true);
    handleClose();
  };

  const commonButtons = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/ServicePublished' },
    { label: 'ABOUT US', path: '/About' },
  ];

  const loggedInButtons = [
    { label: 'REQUEST SERVICES', path: '/CreateTask' },
    { label: 'ACCOUNT', path: '/Account' },
  ];

  const loggedOutButtons = [
    { label: 'LOG IN', path: '/LogIn', onClick: handleOpen },
  ];

  const buttons = isLoggedIn
    ? [...commonButtons, ...loggedInButtons]
    : [...commonButtons, ...loggedOutButtons];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
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
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
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
          <Button onClick={handleLogin} variant="contained" sx={{ mt: 2 }}>
            Log In
          </Button>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
