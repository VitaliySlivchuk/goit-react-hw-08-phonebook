import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from 'hooks/useAuth';
import { Typography } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavLink to="/">
        <HomeIcon
          sx={{
            width: 50,
            height: 50,
            color: '#fff',
            '&:hover': { fontSize: 40 },
          }}
        />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to={'/contacts'}
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          <Typography sx={{ marginLeft: 8 }}>Contacts</Typography>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
