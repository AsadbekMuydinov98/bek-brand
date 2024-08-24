import { Outlet, useLocation } from 'react-router-dom';
import Navigator from '../../components/Navbar/Navigator';
import ECommFooter from '../../components/Footer';
import { LaptopNavbar, MobileNavbar } from '../../components';

const PublicLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const hideNavAndFooter = isLoginPage || isRegisterPage;

  return (
    <main>
      <LaptopNavbar />
      {!hideNavAndFooter && <Navigator />}
      <MobileNavbar />
      <Outlet />
      {!hideNavAndFooter && <ECommFooter />}
    </main>
  );
}

export default PublicLayout;
