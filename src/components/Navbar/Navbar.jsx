import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import userSelectors from 'redux/user/userSelectors';
import { useSelector } from 'react-redux';

const styles = {
  active: {
    color: 'white',
  },

  link: {
    color: '#1935d2',
  },
};

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
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Home {''}
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="contacts"
                style={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                {''} Contacts
              </NavLink>
            )}
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
