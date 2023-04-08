import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';

import { refreshUser } from 'redux/auth/operations';

//routes components
import { RestrictedRoute } from './Routes/RestricteRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

//components
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Home = lazy(() => import('./Home/Home'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Home} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

//fdbgg
//sdfgjytujuiytk@gmail.com
//zxcvbnm
