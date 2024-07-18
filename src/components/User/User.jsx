import { useDispatch } from 'react-redux';
// import { logoutThunk } from '../../redux/authorization/api';
import { logOut } from '../../redux/auth/operations';
import { useAuthorization } from '../../hooks/useAuthorization';

import style from './User.module.css';

export const User = () => {
  const dispatch = useDispatch();
  const { user } = useAuthorization();

  return (
    <div className={style.user__wrap}>
      <p>Welcome, {user ? user.name : "Гість"}</p>
      <button className={style.user__button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};