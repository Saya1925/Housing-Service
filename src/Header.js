import React, { useState, useEffect, useContext } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import logoHeader from './images/logoHeader.jpg';
import { Modal, Box, TextField, Button } from '@mui/material';
import './css/Header.css';
import axios from 'axios';

// Create a context to share the session data
const SessionContext = React.createContext();

const Header = ({  }) => {
  const [openLogin, setOpenLogin] = useState(false); // use openLogin instead of open
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); 

  //handleOpenLogin to open your login modal. 
  //If true, can be used to control the visibility of your login modal 
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/account/login', {
        email: email,
        password: password
      })
      .then(function (response) {
        if (response.status === 200) {
          setIsLoggedIn(true);
  
          const { membership, professional, userID } = response.data;
          let userType = 'registered';
          if (membership === 1 && professional === 0) {
            userType = 'membership';
          } else if (membership === 0 && professional === 1) {
            userType = 'professional';
          }
          setUserType(userType);
          sessionStorage.setItem('userType', userType); // Store userType in sessionStorage
          sessionStorage.setItem('userID', userID); // Store userID in sessionStorage
  
          handleCloseLogin();
        } else {
          console.error('Login unsuccessful');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const buttons = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/ServicePublished' },
    { label: 'ABOUT US', path: '' },
    { label: 'LOGIN', onClick: handleOpenLogin },
  ];

  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      switch (userType) {
        case 'membership':
          navigate('/HomePageMembership', { replace: true });
          break;
        case 'professional':
          navigate('/HomePageProfessional', { replace: true });
          break;
        case 'registered':
        default:
          navigate('/HomePageRegistered', { replace: true });
          break;
      }
    }
  }, [userType, isLoggedIn, navigate]);
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logoHeader} alt="logoHeader" />
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
      <Modal open={openLogin} onClose={handleCloseLogin}>
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
