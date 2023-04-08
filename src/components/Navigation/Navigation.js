import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoading } = useAuth();
  return (
    <nav>
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
      {isLoading && <NavLink to={'/tasks'}>Tasks</NavLink>}
    </nav>
  );
};

export default Navigation;
