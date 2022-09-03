import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = ({ restricted = false }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="contacts" replace /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
};
