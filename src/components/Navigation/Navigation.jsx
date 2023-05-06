import { NavLink } from "react-router-dom";
import { useAuthorization } from '../../hooks/useAuthorization';
// import { NavigationLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuthorization();

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};