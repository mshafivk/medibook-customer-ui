import { Outlet } from 'react-router-dom';
import AuthStatus from '../../auth/AuthStatus';

function Layout() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-sky-600 to-sky-400">
      <AuthStatus />
      <div className="min-h-[91vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-4xl items-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
