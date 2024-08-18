import { Layout, Badge, Select } from 'antd';
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavigatorWrapper } from './style';
import { useEffect } from 'react';
import { setActiveLink } from '../../../redux/slice/activelink';
import AvatarDropdown from '../../Avatar';
import { RootState } from '../../../redux/store';


const { Header } = Layout;

interface Product {
  price: number;
  discountPercent: number;
  count?: number;
}


const Navigator: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();
  const { cart } = useSelector((state: RootState) => state.product);
  const activeLink = useSelector((state: RootState) => state.nav.activeLink);
  

  useEffect(() => {
    dispatch(setActiveLink(location.pathname));
  }, [location, dispatch]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const calculateTotal = () => {
    return cart?.reduce((total, product: Product) => {
      const discountPrice = product.price - (product.price * (product.discountPercent / 100));
      return total + discountPrice * (product.count || 1);
    }, 0) || 0;
  };

  return (
    <NavigatorWrapper $themeMode={theme as 'light' | 'dark'}>
      <Header className='hedr'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            defaultValue="En"
            style={{ width: 60 }}
            onChange={handleChange}
            options={[
              { value: 'english', label: 'En' },
              { value: 'korean', label: 'Kr' },
              { value: 'uzbek', label: 'UZ' }
            ]}
          />
          <Select
            defaultValue="$"
            style={{ width: 60 }}
            onChange={handleChange}
            options={[
              { value: 'usd', label: '$' },
              { value: 'krw', label: '₩' }
            ]}
          />
        </div>
        <div className='user-store'>
          {/* <Link to='/user' className={${activeLink === '/user' ? 'active' : ''}}>
            <UserOutlined  /> 
          </Link> */}
          <AvatarDropdown />
          <Badge count={cart?.length || 0}>
            <Link to='/basket' className={`${activeLink === '/basket' ? 'active' : ''}`}>
              <ShoppingCartOutlined />
            </Link>
          </Badge>
          <span>Items: ${calculateTotal().toFixed(2)}</span>
          <SearchOutlined className='nav-search-in' />
        </div>
      </Header>
    </NavigatorWrapper>
  );
};

export default Navigator;
