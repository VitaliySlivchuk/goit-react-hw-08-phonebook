import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <>
      <Typography>Welcome, {name}</Typography>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </>
  );
};

export default UserMenu;
