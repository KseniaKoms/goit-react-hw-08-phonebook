import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = ({ email }) => {
  return (
    <>
      <Typography variant="h6" component="div">{`Hello, ${email}!`}</Typography>
      <NavLink to="/">
        <Button color="inherit">Logout</Button>
      </NavLink>
    </>
  );
};
