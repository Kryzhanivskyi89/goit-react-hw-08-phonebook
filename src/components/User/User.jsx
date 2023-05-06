import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/authorizationOperations';
import { useAuthorization } from '../../hooks/useAuthorization';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuthorization();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};