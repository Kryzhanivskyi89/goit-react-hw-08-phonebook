import { Outlet } from 'react-router-dom';
import { AppBuffet } from './AppBuffet/AppBuffet';
import { Suspense } from 'react';
import { AppContainer } from './App.styled';

const Layout = () => {
  return (
    <AppContainer>
      <AppBuffet />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};

export default Layout;