import { NavLink } from "react-router-dom";
import { useAuthorization } from '../../hooks/useAuthorization';
import style from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuthorization();

  return (
    <nav className={style.nav__home}>
      <NavLink className={style.nav__homeLink} to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};