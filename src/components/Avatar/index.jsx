import { Dropdown, Space, Avatar } from 'antd';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slice/auth';
import './style.css';
import { resetFavoritesAndCart } from '../../redux/slice/products';

const AvatarDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  

  const handleMenuClick = (e) => {
    if (e.key === 'profile') {
      if(!user){navigate('/login')}
      if(user&&user.role ==='admin'){
        navigate('/dashboard')
      }else{
        navigate('/user')
      }
    } else if (e.key === 'logout') {
      dispatch(logoutUser());
      dispatch(resetFavoritesAndCart())
    }
  };

  const items = [
    {
      key: 'profile',
      label: (
        <span>
          <UserOutlined style={{ marginRight: 8 }} />
          Profile
        </span>
      ),
    },
    {
      key: 'logout',
      label: (
        <span>
          <LogoutOutlined style={{ marginRight: 8 }} />
          Logout
        </span>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items, onClick: handleMenuClick }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar className='ikon' icon={<UserOutlined />} />
          <DownOutlined className='vvvvvv' />
        </Space>
      </a>
    </Dropdown>
  );
};

export default AvatarDropdown;
