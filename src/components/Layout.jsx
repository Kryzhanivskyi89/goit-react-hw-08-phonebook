import { Outlet } from 'react-router-dom';
import { AppBuffet } from './AppBuffet/AppBuffet';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <AppBuffet />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;