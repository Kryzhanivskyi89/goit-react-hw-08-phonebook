
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations.js';
// import { refreshUserThunk } from '../redux/authorization/api';
import { useAuthorization } from '../hooks/useAuthorization';

const Error = lazy(()=> import ( './Error/Error'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Registration/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuthorization();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />  
        <Route path="*" element={<Error />} />  
      </Route>
    </Routes>
  );
};


export default App;

