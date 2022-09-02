import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import userSelectors from 'redux/user/userSelectors';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/user/userApi';

export const UserMenu = () => {
  const name = useSelector(userSelectors.getUserName);
  const [logout] = useLogoutMutation();
  return (
    <>
      <Typography
        variant="subtitle1"
        component="div"
        fontSize="18px"
        fontWeight="500"
      >{`Hello, ${name}`}</Typography>
      <NavLink to="/">
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </NavLink>
    </>
  );
};
