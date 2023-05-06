import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthorizationNav } from '../AuthorizationNav/AuthorizationNav';
import { useAuthorization } from '../../hooks/useAuthorization';
// import { AppHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuthorization();

  return (
    <AppHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthorizationNav />}
    </AppHeader>
  );
};