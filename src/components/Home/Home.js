import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export default function Home() {
  const iIsLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <>
      {iIsLoggedIn ? (
        <div>
          <Typography align="center" variant="h1" sx={{ color: 'primary' }}>
            This is your home page, {user.name}
          </Typography>
        </div>
      ) : (
        <>
          <Typography align="center" variant="h1" sx={{ color: 'primary' }}>
            This is home page of ContactsApp
          </Typography>
          <Typography align="center" variant="h3" sx={{ color: '#primary' }}>
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
      )}
    </>
  );
}
