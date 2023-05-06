import { Navigation } from '../Navigation/Navigation';
import { User } from '../User/User';
import { AuthorizationNav } from '../AuthorizationNav/AuthorizationNav';
import { useAuthorization } from '../../hooks/useAuthorization';
// import { AppHeader } from './AppBar.styled';

export const AppBuffet = () => {
  const { isLoggedIn } = useAuthorization();

  return (
    // <AppHeader>

      <>
      <Navigation />
      {isLoggedIn ? <User /> : <AuthorizationNav />}
      </>
      
    
  );
};