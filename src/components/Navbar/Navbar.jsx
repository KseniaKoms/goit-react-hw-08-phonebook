import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navbar = () => {
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
            <NavLink to="contacts"> Contacts</NavLink>
          </Typography>
          <UserMenu />
          <NavLink to="login">
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink to="register">
            <Button color="inherit">Sign up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
