import { NavLink } from "react-router-dom";

import style from './AuthorizationNav.module.css';

export const AuthorizationNav = () => {
  return (
    <div className={style.nav__wrap}>
      <NavLink className={style.nav__link} to="/register">Register</NavLink>
      <NavLink className={style.nav__link} to="/login">Log In</NavLink>
    </div>
  );
};