import { Layout } from 'antd';
import { mobileMenuItems } from '../../../constants/links';
import Item from './Item';
import { MobNavWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setActiveLink } from '../../../redux/slice/activelink';
import { useLocation } from 'react-router-dom';

interface RootState {
  theme: {
    mode: 'light' | 'dark';
  };
}

const MobileNavbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setActiveLink(location.pathname));
  }, [location, dispatch]);

  return (
    <MobNavWrapper $themeMode={theme}>
      <Layout className='menu-wrapper'>
        <div className='menus'>
          {mobileMenuItems.map(item => (
            <Item key={item.key} icon={item.icon} link={item.link} />
          ))}
        </div>
      </Layout>
    </MobNavWrapper>
  );
};

export default MobileNavbar;
