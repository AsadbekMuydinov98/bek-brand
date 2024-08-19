import { Layout, Badge, Select } from 'antd';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavigatorWrapper } from './style';
import { useEffect } from 'react';
import { setActiveLink } from '../../../redux/slice/activelink';
import AvatarDropdown from '../../Avatar';

const { Header } = Layout;


const Navigator = () => {

  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();
  const { cart } = useSelector(state => state.product); 
  const activeLink = useSelector(state => state.nav.activeLink);

  useEffect(() => {
    dispatch(setActiveLink(location.pathname));
  }, [location, dispatch]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const calculateTotal = () => {
    let total = 0;
    cart?.forEach((product) => {
      const discountPrice = product.price - (product.price * (product.discountPercent / 100));
      total += discountPrice * (product.count || 1);
    });
    return total;
  };

  return (
    <NavigatorWrapper $themeMode={theme}>
      <Header className='hedr'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            defaultValue="En"
            style={{
              width: 60,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'english',
                label: 'En',
              },
              {
                value: 'korean',
                label: 'Kr',
              },
              {
                value: 'uzbek',
                label: 'UZ',
              }
            ]}
          />

          <Select
            defaultValue="$"
            style={{
              width: 60,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'usd',
                label: '$',
              },
              {
                value: 'krw',
                label: '₩',
              }
            ]}
          />
          
        </div>
        <div className='user-store'>
          {/* <Link to='/user' className={`${activeLink === '/user' ? 'active' : ''}`}>
            <UserOutlined  /> 
          </Link> */}
          <AvatarDropdown />
          <Badge count={cart?.length}>
            <Link to='/basket' className={`${activeLink === '/basket' ? 'active' : ''}`}>
              <ShoppingCartOutlined  />
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
