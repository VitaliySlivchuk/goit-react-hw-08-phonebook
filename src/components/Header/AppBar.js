import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AppBar, Toolbar, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
