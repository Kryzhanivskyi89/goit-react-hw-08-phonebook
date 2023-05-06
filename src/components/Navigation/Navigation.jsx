import { useAuthorization } from '../../hooks/useAuthorization';
// import { NavigationLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuthorization();

  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </Nav>
  );
};