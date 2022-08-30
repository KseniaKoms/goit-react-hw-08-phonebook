import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import userSelectors from 'redux/user/userSelectors';

export const UserMenu = () => {
  // const name = userSelectors.getUserName();
  return (
    <>
      <Typography variant="h6" component="div">{`Hello!`}</Typography>
      <NavLink to="/">
        <Button color="inherit">Logout</Button>
      </NavLink>
    </>
  );
};
