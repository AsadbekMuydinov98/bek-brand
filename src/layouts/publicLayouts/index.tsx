import { Outlet, useLocation } from 'react-router-dom';
import Navigator from '../../components/Navbar/Navigator';
import ECommFooter from '../../components/Footer';
import { LaptopNavbar, MobileNavbar } from '../../components';

const PublicLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  
  return (
    <main>
      <LaptopNavbar />
      {!isLoginPage && <Navigator />}
      <MobileNavbar />
      <Outlet />
      {!isLoginPage && <ECommFooter />}
    </main>
  );
}

export default PublicLayout;
