import { Outlet } from 'react-router-dom';
import { AppBuffet } from './AppBuffet/AppBuffet';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBuffet />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;