import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="login">
        <Button color="inherit">Login</Button>
      </NavLink>
      <NavLink to="register">
        <Button color="inherit">Sign up</Button>
      </NavLink>
    </>
  );
};
