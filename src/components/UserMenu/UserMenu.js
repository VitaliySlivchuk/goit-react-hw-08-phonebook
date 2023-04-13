import { Typography, IconButton, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>Welcome, {name}</Typography>
      <IconButton
        onClick={() => dispatch(logOut())}
        sx={{ background: '#fff', marginLeft: '25px' }}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
