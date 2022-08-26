import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

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
          <AuthNav />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
