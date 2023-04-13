import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Box>
        <NavLink to={'/register'} style={{ ...styles }}>
          <Button variant="outlined" sx={button}>
            Register
          </Button>
        </NavLink>
      </Box>
      <Box>
        <NavLink to={'/login'} style={styles}>
          <Button variant="outlined" sx={button}>
            Log in
          </Button>
        </NavLink>
      </Box>
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
const button = {
  color: 'white',
  borderColor: 'white',
  '&:hover': { backgroundColor: '#cfd8dc', color: '#000' },
};
