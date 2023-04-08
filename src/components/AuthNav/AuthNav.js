import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <NavLink to={'/register'} style={{ ...styles, marginRight: 20 }}>
          Register
        </NavLink>
      </Box>
      <NavLink to={'/login'} style={styles}>
        Log in
      </NavLink>
    </Box>
  );
};

export default AuthNav;

const styles = {
  textDecoration: 'none',
  color: '#fff',
  '&:hover': {
    color: '#000',
  },
};
