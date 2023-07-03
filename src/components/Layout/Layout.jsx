import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Header = lazy(() => import('components/Header/Header'));

const Layout = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Suspense>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
