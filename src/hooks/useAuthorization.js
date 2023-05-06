import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from '../redux/authorization/authorizationSelectors';

export const useAuthorization = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};