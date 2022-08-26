import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Contacts } from '../views/Contacts/Contacts';
import { HomePage } from '../views/HomePage/HomePage';
import { SignUp } from '../views/SignUp/SignUp';
import { Login } from '../views/Login/Login';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loaging...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="register" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
