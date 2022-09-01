import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Suspense, lazy } from 'react';
import { useCurrentUserQuery } from 'redux/user/userApi';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import PublicRoute from './PublicRoute/PublicRoute';
import userSelectors from 'redux/user/userSelectors';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const Contacts = lazy(() => import('../views/Contacts/Contacts'));
const NotFound = lazy(() => import('../views/NotFound/NotFound'));
const Login = lazy(() => import('../views/Login/Login'));
const SignUp = lazy(() => import('../views/SignUp/SignUp'));

export const App = () => {
  const token = useSelector(userSelectors.getToken);
  const isFetching = useSelector(userSelectors.getIsFetching);

  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    !isFetching && (
      <>
        <Navbar />
        <Suspense fallback={<p>Loaging...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />}></Route>
            </Route>
            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="register" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};
