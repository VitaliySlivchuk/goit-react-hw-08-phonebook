import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Typography align="center" variant="h1" sx={{ color: '#1976d2' }}>
        This is home page of ContactsApp
      </Typography>
      <Typography align="center" variant="h3" sx={{ color: '#1976d2' }}>
        Tap
        <Button sx={{ marginY: '10px' }}>
          <NavLink
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            register
          </NavLink>
        </Button>
        or
        <Button>
          <NavLink
            to="/login"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            log in
          </NavLink>
        </Button>
        to use the application
      </Typography>
    </>
  );
};

export default Home;
