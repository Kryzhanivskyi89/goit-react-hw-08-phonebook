import { Navigation } from '../Navigation/Navigation';
import { User } from '../User/User';
import { AuthorizationNav } from '../AuthorizationNav/AuthorizationNav';
import { useAuthorization } from '../../hooks/useAuthorization';
import style from './AppBuffet.module.css';

export const AppBuffet = () => {
  const { isLoggedIn } = useAuthorization();

  return (    
      <header className={style.header}>
        <Navigation />
        {isLoggedIn ? <User /> : <AuthorizationNav />}
      </header>     
    
  );
};