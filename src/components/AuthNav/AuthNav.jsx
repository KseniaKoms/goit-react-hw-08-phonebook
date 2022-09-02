import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    color: 'white',
    display: 'block',
  },
};
export const AuthNav = () => {
  return (
    <>
      <NavLink
        to="login"
        style={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <Button color="inherit">Login</Button>
      </NavLink>
      <NavLink
        to="register"
        style={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <Button color="inherit">Sign up</Button>
      </NavLink>
    </>
  );
};
