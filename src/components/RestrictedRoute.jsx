import { useAuthorization } from '../hooks/useAuthorization';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthorization();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};