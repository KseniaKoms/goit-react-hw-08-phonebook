import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import userSelectors from 'redux/user/userSelectors';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            children="node"
            sx={{ flexGrow: 1 }}
          >
            <NavLink to="/">Home </NavLink>
            {isLoggedIn && <NavLink to="contacts"> Contacts</NavLink>}
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
