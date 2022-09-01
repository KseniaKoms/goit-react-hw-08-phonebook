import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const { isLoggedIn } = useSelector(state => state.user);

  return isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
};

export default PrivateRoutes;
